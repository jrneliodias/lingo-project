import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../db/schema";

const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    // unit 1 portuguese
    await db.insert(schema.units).values([
      {
        id: 3,
        courseId: 2,
        title: "Unit 1",
        description: "Learn the basics of Portuguese",
        order: 1,
      },
      {
        id: 4,
        courseId: 2,
        title: "Unit 2",
        description: "Learn the common words in Portuguese",
        order: 2,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 5,
        unitId: 3,
        title: "Nouns 1",
        order: 1,
      },
      {
        id: 6,
        unitId: 3,
        title: "Nouns 2",
        order: 2,
      },
      {
        id: 7,
        unitId: 3,
        title: "Nouns 3",
        order: 3,
      },
      {
        id: 8,
        unitId: 4,
        title: "People",
        order: 4,
      },
    ]);

    //  portuguese lesson 1 challenges
    await db.insert(schema.challenges).values([
      {
        id: 11,
        lessonId: 5,
        type: "SELECT",
        question: 'Which one of these is the "the man"?',
        order: 1,
      },
      {
        id: 12,
        lessonId: 5,
        type: "ASSIST",
        question: '"the man"',
        order: 2,
      },
      {
        id: 13,
        lessonId: 5,
        type: "SELECT",
        question: 'Which one of these is the "the robot"?',
        order: 3,
      },
    ]);

    //  portuguese lesson 1 challenge 1  options
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 11,
        imageSrc: "/man.svg",
        correct: true,
        text: "o homem",
        audioSrc: "/br_man.mp3",
      },
      {
        challengeId: 11,
        imageSrc: "/woman.svg",
        correct: false,
        text: "a mulher",
        audioSrc: "/br_woman.mp3",
      },
      {
        challengeId: 11,
        imageSrc: "/robot.svg",
        correct: false,
        text: "o robô",
        audioSrc: "/br_robot.mp3",
      },
    ]);

    //  portuguese lesson 1 challenge 2 options
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 12,
        correct: true,
        text: "o homem",
        audioSrc: "/br_man.mp3",
      },
      {
        challengeId: 12,
        correct: false,
        text: "a mulher",
        audioSrc: "/br_woman.mp3",
      },
      {
        challengeId: 12,
        correct: false,
        text: "o robô",
        audioSrc: "/br_robot.mp3",
      },
    ]);

    //  portuguese lesson 1 challenge 3  options
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 13,
        imageSrc: "/man.svg",
        correct: false,
        text: "o homem",
        audioSrc: "/br_man.mp3",
      },
      {
        challengeId: 13,
        imageSrc: "/woman.svg",
        correct: false,
        text: "a mulher",
        audioSrc: "/br_woman.mp3",
      },
      {
        challengeId: 13,
        imageSrc: "/robot.svg",
        correct: true,
        text: "o robô",
        audioSrc: "/br_robot.mp3",
      },
    ]);

    //  portuguese lesson 2 challenges
    await db.insert(schema.challenges).values([
      {
        id: 14,
        lessonId: 6,
        type: "SELECT",
        question: 'Which one of these is the "the woman"?',
        order: 1,
      },
      {
        id: 15,
        lessonId: 6,
        type: "ASSIST",
        question: '"the woman"',
        order: 2,
      },
      {
        id: 16,
        lessonId: 6,
        type: "SELECT",
        question: 'Which one of these is the "the zombie"?',
        order: 3,
      },
    ]);

    //  portuguese lesson 3 challenges
    await db.insert(schema.challenges).values([
      {
        id: 17,
        lessonId: 7,
        type: "SELECT",
        question: 'Which one of these is the "the boy"?',
        order: 1,
      },
      {
        id: 18,
        lessonId: 7,
        type: "ASSIST",
        question: '"the boy"',
        order: 2,
      },
      {
        id: 19,
        lessonId: 7,
        type: "SELECT",
        question: 'Which one of these is the "the girl"?',
        order: 3,
      },
    ]);

    //  portuguese lesson 2 challenge 1 options
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 14,
        imageSrc: "/man.svg",
        correct: false,
        text: "o homem",
        audioSrc: "/br_man.mp3",
      },
      {
        challengeId: 14,
        imageSrc: "/woman.svg",
        correct: true,
        text: "a mulher",
        audioSrc: "/br_woman.mp3",
      },
      {
        challengeId: 14,
        imageSrc: "/boy.svg",
        correct: false,
        text: "o menino",
        audioSrc: "/br_boy.mp3",
      },
    ]);

    //  portuguese lesson 2 challenge 2 options
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 15,
        correct: false,
        text: "o homem",
        audioSrc: "/br_man.mp3",
      },
      {
        challengeId: 15,
        correct: true,
        text: "a mulher",
        audioSrc: "/br_woman.mp3",
      },
      {
        challengeId: 15,
        correct: false,
        text: "o robô",
        audioSrc: "/br_robot.mp3",
      },
    ]);

    //  portuguese lesson 2 challenge 3 options
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 16,
        imageSrc: "/man.svg",
        correct: false,
        text: "o homem",
        audioSrc: "/br_man.mp3",
      },
      {
        challengeId: 16,
        imageSrc: "/zombie.svg",
        correct: true,
        text: "o zombie",
        audioSrc: "/br_zombie.mp3",
      },
      {
        challengeId: 16,
        imageSrc: "/boy.svg",
        correct: false,
        text: "o menino",
        audioSrc: "/br_boy.mp3",
      },
    ]);

    //  portuguese lesson 3 challenge 1 options
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 17,
        imageSrc: "/man.svg",
        correct: false,
        text: "o homem",
        audioSrc: "/br_man.mp3",
      },
      {
        challengeId: 17,
        imageSrc: "/zombie.svg",
        correct: false,
        text: "o zombie",
        audioSrc: "/br_zombie.mp3",
      },
      {
        challengeId: 17,
        imageSrc: "/boy.svg",
        correct: true,
        text: "o menino",
        audioSrc: "/br_boy.mp3",
      },
    ]);
    //  portuguese lesson 3 challenge 2 options
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 18,
        correct: false,
        text: "a mulher",
        audioSrc: "/br_woman.mp3",
      },
      {
        challengeId: 18,
        correct: false,
        text: "o zombie",
        audioSrc: "/br_zombie.mp3",
      },
      {
        challengeId: 18,
        correct: true,
        text: "o menino",
        audioSrc: "/br_boy.mp3",
      },
    ]);

    //  portuguese lesson 3 challenge 3 options
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 19,
        imageSrc: "/girl.svg",
        correct: true,
        text: "a menina",
        audioSrc: "/br_girl.mp3",
      },
      {
        challengeId: 19,
        imageSrc: "/man.svg",
        correct: false,
        text: "o homem",
        audioSrc: "/br_man.mp3",
      },
      {
        challengeId: 19,
        imageSrc: "/boy.svg",
        correct: false,
        text: "o menino",
        audioSrc: "/br_boy.mp3",
      },
    ]);

    //  portuguese lesson 4 challenges
    await db.insert(schema.challenges).values([
      {
        id: 20,
        lessonId: 8,
        type: "SELECT",
        question: 'Which one of these is the "the zombie"?',
        order: 1,
      },
    ]);

    console.log("Seeding finished.");
  } catch (error) {
    throw new Error("Failed to seed the database");
  }
};

main();
