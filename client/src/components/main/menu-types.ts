import Archive from "../../assets/images/archive.svg";
import Event from "../../assets/images/event.svg";
import Konsultant from "../../assets/images/konsultant-plus.svg";
import Library from "../../assets/images/library.svg";
import MetObr from "../../assets/images/metod-obr.svg";
import Web from "../../assets/images/optimize-web.svg";
import Quality from "../../assets/images/quality.svg";
import Timetable from "../../assets/images/timetable.svg";
import Weather from "../../assets/images/weather.svg";
import Yandex from "../../assets/images/Yandex_znak.svg";
import { MenuItemType } from "./types";

interface SidebarTypes {
    id: string,
    title: string,
    path: string,
    imgUrl: string,
    roleLinks?: MenuItemType
}

export const leftSidebarData: SidebarTypes[] = [
    {
        id: '0',
        title: 'Методическое образование',
        path: '/metod-obr',
        imgUrl: MetObr,
    },
    {
        id: '1',
        title: 'Расписание',
        path: '/timetable',
        imgUrl: Timetable,
    },
    {
        id: '2',
        title: 'Менеджмент качества',
        path: '/quality',
        imgUrl: Quality,
    },
    {
        id: '3',
        title: 'Электронная библиотека',
        path: '/library',
        imgUrl: Library,
    },
    {
        id: '4',
        title: 'Файловый архив',
        path: '/archive',
        imgUrl: Archive,
    },
    {
        id: '5',
        title: 'События',
        path: '/event',
        imgUrl: Event,
    },
    {
        id: '6',
        title: 'Консультант Плюс',
        path: 'http://www.consultant.ru/',
        imgUrl: Konsultant,
        roleLinks: MenuItemType.ExternalRef
    },
    {
        id: '7',
        title: 'Яндекс Переводчик',
        path: 'https://translate.yandex.ru/',
        imgUrl: Yandex,
        roleLinks: MenuItemType.ExternalRef
    },
    {
        id: '8',
        title: 'Погода в Ижевске',
        path: 'https://yandex.ru/pogoda',
        imgUrl: Weather,
        roleLinks: MenuItemType.ExternalRef
    },
    {
        id: '9',
        title: 'Официальный сайт колледжа',
        path: 'https://ciur.ru/ipek',
        imgUrl: Web,
        roleLinks: MenuItemType.ExternalRef
    },
]
