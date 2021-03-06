import express from "express";
import {
  getNumberOfRecipes,
  getCuisines,
  getDifficulty
} from "../controllers/statistics";

const router = express.Router();

export default () => {
  router.get("/numberOfRecipes/:numberOfDays", getNumberOfRecipes);
  router.get("/cuisines", getCuisines);
  router.get("/difficulty", getDifficulty);
  return router;
};
