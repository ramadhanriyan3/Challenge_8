import express from "express";
const router = express.Router();
import uploadOnMemory from "./../middleware/uploadOnMemory";
import carController from "./../controller/carControllers";

router.get("/", carController.getCars);

router.get("/:id", carController.getCarById);

router.post("/create", uploadOnMemory.single("picture"), carController.postCar);
// adminAuth
router.patch(
  "/:id/update",
  uploadOnMemory.single("picture"),
  carController.updateCar
);

router.delete("/:id/delete", carController.deleteCar); //adminAuth

export default router;
