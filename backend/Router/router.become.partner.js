import express from "express";
import {createPartnerRequest} from "../controller/partnetControler.js"

const routerPartner = express.Router();

routerPartner.post("/", createPartnerRequest);

export default routerPartner;