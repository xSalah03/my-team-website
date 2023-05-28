import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartSimple,
    faFileLines,
    faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import stade from "../../../assets/Imgs/stade.png";
import training from "../../../assets/Imgs/training.png";

export default [
    {
        id: 1,
        bgColor: "#F54748",
        title: "Entrenement",
        bgImage: "https://www.myteam.ma/wp-content/uploads/2020/10/5ea599e9250000f12c6b8901.png",
        icon: <FontAwesomeIcon icon={faFileLines} size="3x" />,
        paragraph: <p>Pour structurer le club et pereniser sa mémoire  grâce à une data sécurisée, uniformiser les méthodes de travail, créer une véritable identité de jeu.</p>
    },
    {
        id: 2,
        bgColor: "#F54748",
        title: "Entrenement",
        bgImage: "https://www.myteam.ma/wp-content/uploads/2020/10/5ea599e9250000f12c6b8901.png",
        icon: <FontAwesomeIcon icon={faPersonRunning} size="3x" />,
        paragraph: <p>Pour accéder à toutes les informations d’un joueur, avoir une vision globale du club et gagner du temps au quotidien.</p>
    },
    {
        id: 3,
        bgColor: "#F54748",
        title: "Entrenement",
        bgImage: "https://www.myteam.ma/wp-content/uploads/2020/10/5ea599e9250000f12c6b8901.png",
        icon: <img src={training} />,
        paragraph: <p>Pour organiser les entraînements, créer des exercices, suivre la progression et avoir tous les éléments pour adapter les séances.</p>
    },
    {
        id: 4,
        bgColor: "#F54748",
        title: "Entrenement",
        bgImage: "https://www.myteam.ma/wp-content/uploads/2020/10/5ea599e9250000f12c6b8901.png",
        icon: <img src={stade} />,
        paragraph: <p>Pour organiser les rendez-vous médicaux, centraliser le suivi, protéger les données avec des accès différenciés.</p>
    },
    {
        id: 5,
        bgColor: "#F54748",
        title: "Entrenement",
        bgImage: "https://www.myteam.ma/wp-content/uploads/2020/10/5ea599e9250000f12c6b8901.png",
        icon: <FontAwesomeIcon icon={faChartSimple} size="3x" />,
        paragraph: <p>Pour intégrer des données vidéo et partager son analyse avec tous les membres du club.</p>
    }
];
