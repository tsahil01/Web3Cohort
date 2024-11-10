import { Prisma, PrismaClient } from "@prisma/client";
import { Keypair, Transaction } from "@solana/web3.js";
import express from "express";
import { z } from 'zod';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())

const db = new PrismaClient();

const userValidation = z.object({
    username: z.string(),
    password: z.string()
})

const tnxInputValidation = z.object({
    message: z.any(),
    retry: z.boolean().optional()
})

const jwtSecret = "jwt";

app.get('/', async (req, res) => {
    res.json({
        msg: "Hello World"
    })
})

app.post('/api/v1/signup', async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;


        userValidation.parse({
            username,
            password
        })

        const hashPassword = await bcrypt.hash(password, 10);

        const keypair = new Keypair();
        const publicKey = (keypair.publicKey).toString();
        const privateKey = (keypair.secretKey).toString();

        const user = await db.user.create({
            data: {
                username,
                password: hashPassword,
                privateKey,
                publicKey
            }
        })

        if (user) {
            res.json({
                publicKey
            });
            return;
        }
        throw ("Unable to Sign up")
    } catch (error) {
        res.json({
            err: error
        })
    }
})

app.post('/api/v1/signin', async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        userValidation.parse({
            username,
            password
        })

        const user = await db.user.findFirst({
            where: {
                username
            }
        })

        if (user) {
            console.log("user found");
            const pwValid = await bcrypt.compare(password, user.password);
            if (pwValid) {
                const token = jwt.sign(user, jwtSecret);
                res.json({
                    token,
                    publicKey: user.publicKey
                })
                return;
            }

        }
        throw ("Unable to Sign in")
    } catch (error) {
        res.status(403).json({
            err: error
        })
    }
})

app.post('/api/v1/txn/sign', (req, res) => {
    try {
        const input = req.body;
        tnxInputValidation.parse(input);

        const serializeTransaction = input.message;

        const tx = Transaction.from(Buffer.from(serializeTransaction));
        console.log("tx: ", tx)


        res.json({
            msg: "Sign the txn"
        })
    } catch (err) {

    }
})

app.post('/api/v1/txn', (req, res) => {
    res.json({
        msg: "Sign the txn"
    })
})

app.listen(3000, () => console.log("Listening on Port 3000"))
