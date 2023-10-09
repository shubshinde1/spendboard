import React from "react";
import { Space, Segmented } from "antd";
import CanvasJSReact from "@canvasjs/react-charts";
import Spend from "../Components/Spend";
import Upay from "../Components/Upay";


var CanvasJSChart = CanvasJSReact.CanvasJSChart;



const Home = () => {

    const options = {
        animationEnabled: true,
        animationDuration: 2000,
        height: 300,
        dataPointMaxWidth: 80,


        axisY: {
            title: "Thousands",
            titleWrap: true,
            titleFontFamily: "poppins",
            titleFontColor: "#023154",
            titleFontWeight: "bold",
            labelFontFamily: "poppins",
            labelFontColor: "#023154",
            labelFontWeight: "bold",
            gridDashType: "dash",
            gridColor: "white",
            tickColor: "white",
            lineColor: "white"

        },
        axisX: {
            title: "Days",
            titleWrap: true,
            titleFontFamily: "poppins",
            titleFontColor: "#023154",
            titleFontWeight: "bold",
            labelFontFamily: "poppins",
            labelFontColor: "#023154",
            labelFontWeight: "bold",
            gridDashType: "dash",
            gridColor: "white",
            tickColor: "white",
            lineColor: "white"

        },

        title: {
            text: "Analytics: 50% More than last Week",
            horizontalAlign: "left",
            fontFamily: "poppins",
            fontSize: 12,
            fontWeight: "bold",
            fontColor: "#023154",
            margin: 20,
            backgroundColor: "#F1F3F4",
            cornerRadius: 8,
            padding: 7,
        },

        toolTip: {
            cornerRadius: 4,
            fontFamily: "poppins",
            fontWeight: "bold",
        },


        data: [{
            type: "stackedColumn",
            dataPoints: [
                { label: "Today", color: '#023154', y: 10 },
                { label: "Yesterday", color: '#41BCF1', y: 15 },
                { label: "10-OCT", color: '#023154', y: 32 },
                { label: "11-OCT", color: '#41BCF1', y: 21 },
                { label: "12-OCT", color: '#023154', y: 28 },
            ]
        }]
    }

    return (

        <div className='grid grid-cols-9 gap-5 m-3'>

            <div className='col-span-9 md:col-span-6 gap-5 bg-red-00 grid grid-rows-3 md:grid-rows-2'>

                <div className='row-span-3 hover:shadow-xl duration-700 rounded-lg   p-5'>

                    <Space className=" hidden md:flex">
                        <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} className='popsemi' />
                    </Space>

                    <div className="w-[100%] my-5 popsemi">
                        <CanvasJSChart options={options} className="popsemi" />
                    </div>

                </div>

                <div className='row-span-1 '>
                    <Spend />
                </div>

            </div>

            <div className=' col-span-9 md:col-span-3 bg-slate-50 rounded-lg hover:shadow-2xl duration-500'>
                <Upay />
            </div>

        </div>
    )
}
export default Home