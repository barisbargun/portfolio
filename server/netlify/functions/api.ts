import * as dotenv from "dotenv";
dotenv.config();

import express, { Router } from "express";
import helmet from "helmet";
import cors from "cors";

import serverless from "serverless-http";
import { StatusCodes } from 'http-status-codes';

import promise from "es6-promise"; // For await fetch
import isoFetch from "isomorphic-fetch"; // for fetch

import { limiterOptions, corsOptions, mailOptions, transporter } from "../config";
import { credentials, verifyRecaptcha } from "../middleware";

promise.polyfill();

const app = express();
app.disable('x-powered-by')
app.use(limiterOptions);
app.use(helmet());
app.use(credentials)
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
const router = Router();

router.post("/", verifyRecaptcha(), (req, res) => {
	if (!req || !req.body) return res.sendStatus(StatusCodes.NO_CONTENT);
	const { email, name, message } = req.body;

	if (!email || !name || !message) return res.sendStatus(StatusCodes.NO_CONTENT)

	transporter.sendMail(mailOptions(email, name, message), function (error, info) {
		if (error) {
			console.log(error);
			return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
		} else {
			return res.sendStatus(StatusCodes.OK)
		}
	}
	);
})

app.use("/api/", router);

app.listen(8080, () => console.log("listening 8080"))

export const handler = serverless(app);