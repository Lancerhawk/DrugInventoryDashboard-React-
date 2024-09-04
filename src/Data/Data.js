// Sidebar Imports
import {
    UilEstate,
    UilAmbulance,
    UilArchive,
    UilCapsule,
    UilChart,
    UilShop,
    UilBell,
    UilMoneyWithdrawal,
    UilRupeeSign,
    UilClipboardAlt
} from '@iconscout/react-unicons';

import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'

// Sidebar Data
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilAmbulance,
        heading: "Orders",
    },
    {
        icon: UilArchive,
        heading: "Inventory",
    },
    {
        icon: UilCapsule,
        heading: "Drugs",
    },
    {
        icon: UilChart,
        heading: "Analytics",
    },
    {
        icon: UilShop,
        heading: "Vendors",
    },
    {
        icon: UilBell,
        heading: "Notifications",
    },

];

export const CardsData = [
    {
        title: "Sales" ,
        color: {
            background: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "---",
        png: UilRupeeSign,
        series:[
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: "Revenue" ,
        color: {
            background: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "---",
        png: UilMoneyWithdrawal,
        series:[
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: "Expenses" ,
        color: {
            background: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "---",
        png: UilClipboardAlt,
        series:[
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 13, 15, 20],
            },
        ],
    },

]

//Data for the update card
export const UpdatesData =[
    {
        img: img3,
        name: "Urgent!!",
        noti: "Your anticiline is about to expire soon!",
        time: "20 seconds ago",
    },
    {
        img: img2,
        name: "Tested!",
        noti: "Your order of antiseptics has been arranged is on shipment procedure.",
        time: "2 minutes ago",
    },
    {
        img: img1,
        name: "Added to Inventory",
        noti: "Your order of monolits has been delivered!",
        time: "3 minutes ago",
    },
    {
        img: img3,
        name: "Urgent!!",
        noti: "You are very low on zactos stocks.",
        time: "23 minutes ago",
    },
]