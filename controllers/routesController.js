import express from 'express';
import getRoutesModel from '../models/routes.js';

const router = express.Router();

// Create a new route
router.post('/routes', async (req, res) => {
  try {
    const { route_no, route_name, bus_nos } = req.body;
    const routes = await getRoutesModel();
    const newRoute = await routes.create({ route_no, route_name, bus_nos });
    res.status(201).json(newRoute);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read all routes
router.get('/', async (req, res) => {
  try {
    const routes = await getRoutesModel();
    const allRoutes = await routes.findAll();
    res.status(200).json(allRoutes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read a single route by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const routes = await getRoutesModel();
    const route = await routes.findByPk(id);
    if (route) {
      res.status(200).json(route);
    } else {
      res.status(404).json({ error: 'Route not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a route by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { route_no, route_name, bus_nos } = req.body;
    const routes = await getRoutesModel();
    const [updated] = await routes.update({ route_no, route_name, bus_nos }, {
      where: { id }
    });
    if (updated) {
      const updatedRoute = await routes.findByPk(id);
      res.status(200).json(updatedRoute);
    } else {
      res.status(404).json({ error: 'Route not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a route by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const routes = await getRoutesModel();
    const deleted = await routes.destroy({
      where: { id }
    });
    if (deleted) {
      res.status(200).send({ message: 'Route deleted' });
    } else {
      res.status(404).json({ error: 'Route not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
