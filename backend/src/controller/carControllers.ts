import { Request, Response } from "express";
import CarServices from "../services/car";
import { v4 as uuidv4 } from "uuid";

import cloudinary from "./../../cloudinary";

// get Cars
const getCars = async (req: Request, res: Response) => {
  const getCars = await new CarServices().getAll();
  if (getCars.length) {
    return res.status(200).json(getCars);
  } else {
    return res.status(404).json({
      message: "Car list not found",
    });
  }
};

// Get car by id
const getCarById = async (req: Request, res: Response) => {
  const carById = await new CarServices().getById(req);
  if (carById.length) {
    return res.status(200).json(carById);
  } else {
    return res.status(404).json({
      message: "Car list not found",
    });
  }
};

// dellete car
const deleteCar = async (req: Request, res: Response) => {
  // const logData = {
  //   user_id: (req as any).user?.user_id,
  //   car_id: getId,
  //   action: "delete",
  //   description: `deleting car item with id ${getId}`,
  // };
  // const newLog = await new LogServices().postLog(logData);
  await new CarServices().deleteCar(req);
  return res.status(202).json({
    status: "Item has been deleted",
  });
};

// postCar
const postCar = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "No image provided" });
    }

    const fileBase64 = req.file.buffer.toString("base64");
    const file = `data:${req.file.mimetype};base64,${fileBase64}`;
    const result = await cloudinary.uploader.upload(file, { timeout: 120000 });
    const model = body.model;
    const rentPerDay = body.rentPerDay;
    const image_url = result.url;
    const id = uuidv4();
    const postCar = await new CarServices().postCar({
      id,
      model,
      rentPerDay,
      image: image_url,
    });
    res.status(201).json({ message: "New car has been created", car: postCar });
    // const logData = {
    //   user_id: (req as any).user?.user_id,
    //   car_id: id,
    //   action: "post",
    //   description: `add new car item with id ${id}`,
    // };
    // const newLog = await new LogServices().postLog(logData);
    // console.log(logData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update Car
const updateCar = async (req: Request, res: Response) => {
  const body = req.body;
  const reqId = req.params.id;
  console.log(reqId);
  const carById = await new CarServices().getById(req);

  if (!carById.length) {
    res.status(404).json({ message: "Car not found" });
  }

  if (req.file) {
    const fileBase64 = req.file.buffer.toString("base64");
    const file = `data:${req.file.mimetype};base64,${fileBase64}`;
    const result = await cloudinary.uploader.upload(file, { timeout: 120000 });
    const image = result.url;
    const model = body.model || undefined;
    const rentPerDay = body.rentPerDay || undefined;
    const updateData = { model, rentPerDay, image };
    console.log(body);
    await new CarServices().updateCar(req, updateData);
    // const logData = {
    //   user_id: (req as any).user?.user_id,
    //   car_id: reqId,
    //   action: "patch",
    //   description: `update car item with id ${reqId}`,
    // };
    // const newLog = await new LogServices().postLog(logData);
    // console.log(logData, newLog);
    res.status(200).json({ message: "update success", updateData });
  } else {
    const model = body.model || undefined;
    const rentPerDay = body.rentPerDay || undefined;
    const updateData = { model, rentPerDay };
    await new CarServices().updateCar(req, updateData);
    // const logData = {
    //   user_id: (req as any).user?.user_id,
    //   car_id: reqId,
    //   action: "patch",
    //   description: `update car item with id ${reqId}`,
    // };
    // const newLog = await new LogServices().postLog(logData);
    res.status(200).json({ message: "update success", updateData });
  }
};

const carController = { getCars, getCarById, deleteCar, postCar, updateCar };

export default carController;
