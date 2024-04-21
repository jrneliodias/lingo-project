import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../db/schema";

const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/es.svg",
      },
      {
        id: 2,
        title: "Portuguese",
        imageSrc: "/br.svg",
      },
      {
        id: 3,
        title: "Freach",
        imageSrc: "/fr.svg",
      },
      {
        id: 4,
        title: "Croatian",
        imageSrc: "/hr.svg",
      },
      {
        id: 5,
        title: "Italian",
        imageSrc: "/it.svg",
      },
    ]);

    // unit 1 spanish
    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics of Spanish",
        order: 1,
      },
      {
        id: 2,
        courseId: 1,
        title: "Unit 2",
        description: "Learn the common words in Spanish",
        order: 2,
      },
    ]);
    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        title: "Nouns 1",
        order: 1,
      },
      {
        id: 2,
        unitId: 1,
        title: "Nouns 2",
        order: 2,
      },
      {
        id: 3,
        unitId: 1,
        title: "Nouns 3",
        order: 3,
      },
      {
        id: 4,
        unitId: 2,
        title: "People",
        order: 4,
      },
    ]);

    //  spanish lesson 1 challenges
    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        question: 'Which one of these is the "the man"?',
        order: 1,
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        question: '"the man"',
        order: 2,
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        question: 'Which one of these is the "the robot"?',
        order: 3,
      },
    ]);

    //  spanish lesson 1 challenge 1  options
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1,
        imageSrc: "/man.svg",
        correct: true,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/woman.svg",
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/robot.svg",
        correct: false,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    //  spanish lesson 1 challenge 2 options
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2,
        correct: true,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    //  spanish lesson 1 challenge 3  options
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3,
        imageSrc: "/man.svg",
        correct: false,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/woman.svg",
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/robot.svg",
        correct: true,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    //  spanish lesson 2 challenges
    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2,
        type: "SELECT",
        question: 'Which one of these is the "the woman"?',
        order: 1,
      },
      {
        id: 5,
        lessonId: 2,
        type: "ASSIST",
        question: '"the woman"',
        order: 2,
      },
      {
        id: 6,
        lessonId: 2,
        type: "SELECT",
        question: 'Which one of these is the "the zombie"?',
        order: 3,
      },
    ]);

    //  spanish lesson 3 challenges
    await db.insert(schema.challenges).values([
      {
        id: 7,
        lessonId: 3,
        type: "SELECT",
        question: 'Which one of these is the "the boy"?',
        order: 1,
      },
      {
        id: 8,
        lessonId: 3,
        type: "ASSIST",
        question: '"the boy"',
        order: 2,
      },
      {
        id: 9,
        lessonId: 3,
        type: "SELECT",
        question: 'Which one of these is the "the girl"?',
        order: 3,
      },
    ]);

    //  spanish lesson 2 challenge 1 options
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 4,
        imageSrc: "/man.svg",
        correct: false,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 4,
        imageSrc: "/woman.svg",
        correct: true,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 4,
        imageSrc: "/boy.svg",
        correct: false,
        text: "el chico",
        audioSrc: "/es_chico.mp3",
      },
    ]);

    //  spanish lesson 2 challenge 2 options
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 5,
        correct: false,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 5,
        correct: true,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 5,
        correct: false,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    //  spanish lesson 2 challenge 3 options
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 6,
        imageSrc: "/man.svg",
        correct: false,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 6,
        imageSrc: "/zombie.svg",
        correct: true,
        text: "el zombie",
        audioSrc: "/es_zombie.mp3",
      },
      {
        challengeId: 6,
        imageSrc: "/boy.svg",
        correct: false,
        text: "el chico",
        audioSrc: "/es_boy.mp3",
      },
    ]);

    //  spanish lesson 3 challenge 1 options
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 7,
        imageSrc: "/man.svg",
        correct: false,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 7,
        imageSrc: "/zombie.svg",
        correct: false,
        text: "el zombie",
        audioSrc: "/es_zombie.mp3",
      },
      {
        challengeId: 7,
        imageSrc: "/boy.svg",
        correct: true,
        text: "el chico",
        audioSrc: "/es_boy.mp3",
      },
    ]);
    //  spanish lesson 3 challenge 2 options
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 8,
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 8,
        correct: false,
        text: "el zombie",
        audioSrc: "/es_zombie.mp3",
      },
      {
        challengeId: 8,
        correct: true,
        text: "el chico",
        audioSrc: "/es_boy.mp3",
      },
    ]);

    //  spanish lesson 3 challenge 3 options
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 9,
        imageSrc: "/girl.svg",
        correct: true,
        text: "la nina",
        audioSrc: "/es_girl.mp3",
      },
      {
        challengeId: 9,
        imageSrc: "/man.svg",
        correct: false,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 9,
        imageSrc: "/boy.svg",
        correct: false,
        text: "el chico",
        audioSrc: "/es_boy.mp3",
      },
    ]);

    //  spanish lesson 4 challenges
    await db.insert(schema.challenges).values([
      {
        id: 10,
        lessonId: 4,
        type: "SELECT",
        question: 'Which one of these is the "the girl"?',
        order: 1,
      },
    ]);

    console.log("Seeding finished.");
  } catch (error) {
    throw new Error("Failed to seed the database");
  }
};

main();
