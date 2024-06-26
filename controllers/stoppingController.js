import express from 'express';
import getStoppingModel from '../models/stoppings.js';
import getRoutesModel from '../models/routes.js';
import { Sequelize } from 'sequelize';
const router = express.Router();
// Create a new stopping
router.post('/', async (req, res) => {
  try {
    const { lat,long,alt,bus_no} = req.body;
    const stoppings = await getStoppingModel();
    const routes = await getRoutesModel();
    const route = await routes.findOne({where:Sequelize.fn("JSON_CONTAINS",Sequelize.col("bus_nos"), `["${bus_no}"]`)})
    console.log(route)
    const newStopping = await stoppings.create({ lat,long,alt,bus_no,route_id:route.id });
    res.status(201).json(newStopping);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
});

// Read all stoppings
router.get('/', async (req, res) => {
  try {
    const stoppings = await getStoppingModel();
    const allStoppings = await stoppings.findAll();
    res.status(200).json(allStoppings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read a single stopping by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const stoppings = await getStoppingModel();
    const stopping = await stoppings.findByPk(id);
    if (stopping) {
      res.status(200).json(stopping);
    } else {
      res.status(404).json({ error: 'stopping not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a stopping by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { route_no, route_name, bus_nos } = req.body;
    const stoppings = await getStoppingModel();
    const [updated] = await stoppings.update({ route_no, route_name, bus_nos }, {
      where: { id }
    });
    if (updated) {
      const updatedStopping = await stoppings.findByPk(id);
      res.status(200).json(updatedStopping);
    } else {
      res.status(404).json({ error: 'stopping not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a stopping by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const stoppings = await getStoppingModel();
    const deleted = await stoppings.destroy({
      where: { id }
    });
    if (deleted) {
      res.status(200).send({ message: 'stopping deleted' });
    } else {
      res.status(404).json({ error: 'stopping not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
