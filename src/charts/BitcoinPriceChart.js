import React, { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";

import { Divider } from "@mui/material";
import ApiClient from "../api/ApiClient";
import { API_URLS, CHART_LABELS } from "../utils/constants";
import ChartHeader from "../components/ChartHeader";
import ChartContainer from "../components/ChartContainer";
import ChartBox from "../components/ChartBox";
import ProgressIndicator from "../components/ProgressIndicator";

const BitcoinPriceChart = () => {
  const [bitcoinData, setBitcoinData] = useState(null);

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiClient.get(API_URLS.CoinPrices);
        setBitcoinData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData().then(() => {});
  }, []);

  const processBitcoinData = () => {
    if (!bitcoinData) return null;

    const labels = Object.keys(bitcoinData.bpi); // [ USD, GBP, EUR ]
    const prices = labels.map(
      (currency) => bitcoinData.bpi[currency].rate_float,
    );

    return {
      labels,
      datasets: [
        {
          label: CHART_LABELS.BITCOIN_PRICE,
          backgroundColor: "#2BB5B6",
          borderColor: "#B80015",
          borderWidth: 1,
          hoverBackgroundColor: "#238784",
          hoverBorderColor: "#F75B58",
          data: prices,
        },
      ],
    };
  };

  return (
    <ChartContainer>
      <ChartHeader primaryHeader={"Bitcoin Price Chart"} />
      <Divider />
      <ChartBox>
        {bitcoinData ? (
          <Bar data={processBitcoinData()} options={chartOptions} />
        ) : (
          <ProgressIndicator />
        )}
      </ChartBox>
    </ChartContainer>
  );
};

export default BitcoinPriceChart;
