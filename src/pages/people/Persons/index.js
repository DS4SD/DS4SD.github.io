import React from "react";
import { ArrowRight20 } from "@carbon/icons-react";
import * as styles from "./styles.module.scss";

const persons = [
  {
    firstName: "Peter",
    lastName: "Staar",
    code: "zurich-TAA",
    imageCode: "4731",
  },
  {
    firstName: "Christoph",
    lastName: "Auer",
    code: "zurich-CAU",
    imageCode: "7717",
  },
  {
    firstName: "Cesar",
    lastName: "Berrospi Ramis",
    code: "zurich-CEB",
    imageCode: "2868",
  },
  {
    firstName: "Michele",
    lastName: "Dolfi",
    code: "zurich-DOL",
    imageCode: "5849",
  },
  {
    firstName: "Kasper",
    lastName: "Dinkla",
    code: "zurich-DKL",
    imageCode: "9981",
  },
  {
    firstName: "Francesco",
    lastName: "Fusco",
    code: "zurich-FFU",
    imageCode: "10015",
  },
  {
    firstName: "Viktor",
    lastName: "Kuropiatnyk",
    code: "zurich-VKU",
    imageCode: undefined,
  },
  {
    firstName: "Nikos",
    lastName: "Livathinos",
    code: "zurich-NLI",
    imageCode: undefined,
  },
  {
    firstName: "Maxim",
    lastName: "Lysak",
    code: "zurich-MLY",
    imageCode: undefined,
  },
  {
    firstName: "Ingmar",
    lastName: "Meijer",
    code: "zurich-inm",
    imageCode: "2332",
  },
  {
    firstName: "Lucas",
    lastName: "Morin",
    code: "zurich-LUM",
    imageCode: "10017",
  },
  {
    firstName: "Ahmed",
    lastName: "Nassar",
    code: "zurich-AHN",
    imageCode: "9567",
  },
  {
    firstName: "Birgit",
    lastName: "Pfitzmann",
    code: "zurich-BPF",
    imageCode: "1831",
  },
  {
    firstName: "Valery",
    lastName: "Weber",
    code: "zurich-?",
    imageCode: undefined,
  },
];

const PersonList = () => (
  <div className={styles.persons}>
    {persons.map(({ firstName, lastName, code, imageCode }) => (
      <a
        className={styles.card}
        href={
          code
            ? `https://researcher.watson.ibm.com/researcher/view.php?person=${code}`
            : undefined
        }
      >
        {imageCode ? (
          <img
            src={`https://s3.us.cloud-object-storage.appdomain.cloud/res-photos/${imageCode}.jpg`}
          />
        ) : (
          <div className={styles.noImg} />
        )}

        <div className={styles.name}>
          <div className={styles.firstName}>{firstName}</div>
          <div className={styles.lastName}>{lastName}</div>
        </div>

        <ArrowRight20 />
      </a>
    ))}
  </div>
);

export default PersonList;
