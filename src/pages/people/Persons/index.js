import React from "react";
import { ArrowRight20 } from "@carbon/icons-react";
import * as styles from "./styles.module.scss";

const persons = [
  {
    firstName: "Peter",
    lastName: "Staar",
    code: "peter-staar",
    imageCode: "1940",
  },
  {
    firstName: "Diego",
    lastName: "Antognini",
    code: undefined,
    imageCode: undefined,
  },
  {
    firstName: "Christoph",
    lastName: "Auer",
    code: "christoph-auer",
    imageCode: "2876",
  },
  {
    firstName: "Cesar",
    lastName: "Berrospi Ramis",
    code: "cesar-berrospi-ramis",
    imageCode: "992",
  },
  {
    firstName: "Michele",
    lastName: "Dolfi",
    code: "michele-dolfi",
    imageCode: "2877",
  },
  {
    firstName: "Kasper",
    lastName: "Dinkla",
    code: "kasper-dinkla",
    imageCode: "4530",
  },
  {
    firstName: "Francesco",
    lastName: "Fusco",
    code: undefined,
    imageCode: undefined,
  },
  {
    firstName: "Shubham",
    lastName: "Gupta",
    code: undefined,
    imageCode: undefined,
  },
  {
    firstName: "Yusik",
    lastName: "Kim",
    code: "yusik-kim",
    imageCode: "1009",
  },
  {
    firstName: "Viktor",
    lastName: "Kuropiatnyk",
    code: undefined,
    imageCode: undefined,
  },
  {
    firstName: "Nikos",
    lastName: "Livathinos",
    code: "nikos-livathinos",
    imageCode: "779",
  },
  {
    firstName: "Maxim",
    lastName: "Lysak",
    code: "maxim-lysak",
    imageCode: "3797",
  },
  {
    firstName: "Ingmar",
    lastName: "Meijer",
    code: undefined,
    imageCode: undefined,
  },
  {
    firstName: "Lokesh",
    lastName: "Mishra",
    code: "lokesh-mishra",
    imageCode: "924",
  },
  {
    firstName: "Lucas",
    lastName: "Morin",
    code: "lucas-morin",
    imageCode: "2634",
  },
  {
    firstName: "Ahmed",
    lastName: "Nassar",
    code: "ahmed-nassar",
    imageCode: "2439",
  },
  {
    firstName: "Birgit",
    lastName: "Pfitzmann",
    code: "birgit-pfitzmann",
    imageCode: "3223",
  },
  {
    firstName: "Panos",
    lastName: "Vagenas",
    code: "panos-vagenas",
    imageCode: "902",
  },
  {
    firstName: "Valery",
    lastName: "Weber",
    code: undefined,
    imageCode: undefined,
  },
];

const PersonList = () => (
  <div className={styles.persons}>
    {persons.map(({ firstName, lastName, code, imageCode }) => (
      <a
        className={styles.card}
        href={code ? `https://research.ibm.com/people/${code}` : undefined}
      >
        {imageCode ? (
          <img
            alt="photograph"
            src={`https://dwzke5c1hcizv.cloudfront.net/image?url=https%3A%2F%2Fresearch-website-prod-ibmers-images.s3.us-east.cloud-object-storage.appdomain.cloud%2F${imageCode}&w=3840&q=75`}
          />
        ) : (
          <div className={styles.noImg}>
            <img
              alt="photograph"
              src="/images/user-profile.svg"
            />
          </div>
        )}

        <div className={styles.name}>
          <div className={styles.firstName}>{firstName}</div>
          <div className={styles.lastName}>{lastName}</div>
        </div>

        {code && <ArrowRight20 />}
      </a>
    ))}
  </div>
);

export default PersonList;
