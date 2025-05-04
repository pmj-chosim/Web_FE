import React from "react";
import { Line } from "react-chartjs-2"; // react-chartjs-2에서 제공하는 Line 차트 컴포넌트
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js 설정
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const list_a = [5, 10, 15, 20, 35, 40, 45, 50, 25, 30];

function DashboardComponent() {
  // 차트 데이터 설정
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], // x축 레이블
    datasets: [
      {
        label: "Value", // 데이터셋 이름
        data: list_a, // y축 값
        borderColor: "rgba(75, 192, 192, 1)", // 라인 색상
        backgroundColor: "rgba(75, 192, 192, 0.2)", // 배경 색상 (라인 아래)
        tension: 0.1, // 라인 부드럽기 정도
      },
    ],
  };

  // 차트 옵션 설정
  const options = {
    responsive: true, // 화면 크기 변화에 따라 차트 크기 조정
    scales: {
      x: {
        title: {
          display: true,
          text: "Index", // x축 제목
        },
      },
      y: {
        title: {
          display: true,
          text: "Value", // y축 제목
        },
      },
    },
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Line data={data} options={options} /> {/* Line 차트 컴포넌트 렌더링 */}
    </div>
  );
}

export default DashboardComponent;
