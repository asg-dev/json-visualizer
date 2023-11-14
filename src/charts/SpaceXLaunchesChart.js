import React, {
  useEffect,
  useState,
} from 'react';

import { Chart } from 'chart.js/auto';
import {
  Bar,
  Doughnut,
  Line,
  Pie,
} from 'react-chartjs-2';

import {
  Divider,
  Typography,
} from '@mui/material';

import ApiClient from '../api/ApiClient';
import ChartBox from '../components/ChartBox';
import ChartContainer from '../components/ChartContainer';
import ChartHeader from '../components/ChartHeader';
import ProgressIndicator from '../components/ProgressIndicator';
import {
  API_URLS,
  CHART_LABELS,
} from '../utils/constants';

const SpaceXLaunchesChart = () => {
  const [launchData, setLaunchData] = useState(null);
  const chartName = Chart.name; // eslint-disable-line no-unused-vars

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiClient.get(API_URLS.SpaceX);
        setLaunchData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData().then(() => {});
  }, []);

  const processLaunchData = () => {
    const launchesByYear = {};

    if (launchData) {
      launchData.forEach((launch) => {
        const year = launch.launch_year;
        launchesByYear[year] = (launchesByYear[year] || 0) + 1;
      });
    }

    return {
      labels: Object.keys(launchesByYear),
      datasets: [
        {
          label: CHART_LABELS.SPACEX_NUMBER_OF_LAUNCHES,
          backgroundColor: "#2BB5B6",
          borderColor: "#4BC0C0",
          borderWidth: 1,
          hoverBackgroundColor: "#238784",
          hoverBorderColor: "#2387FF",
          data: Object.values(launchesByYear),
        },
      ],
    };
  };

  const processSuccessRateData = () => {
    const successRateByYear = {};

    if (launchData) {
      launchData.forEach((launch) => {
        const year = launch.launch_year;
        const successCount = launch.launch_success ? 1 : 0;

        successRateByYear[year] = successRateByYear[year] || {
          total: 0,
          success: 0,
        };
        successRateByYear[year].total += 1;
        successRateByYear[year].success += successCount;
      });
    }

    const successRateData = {
      labels: Object.keys(successRateByYear),
      datasets: [
        {
          label: CHART_LABELS.SPACEX_SUCCESS_RATE_PERCENT,
          lineTension: 0.1,
          backgroundColor: "#2BB5B6",
          borderColor: "#4BC0C0",
          pointRadius: 2,
          data: Object.keys(successRateByYear).map(
            (year) =>
              (successRateByYear[year].success /
                successRateByYear[year].total) *
                100 || 0
          ),
        },
      ],
    };

    return successRateData;
  };

  const processMissionOutcomeData = () => {
    const missionOutcomes = {};

    if (launchData) {
      launchData.forEach((launch) => {
        const outcome = launch.launch_success ? "Success" : "Failure";
        missionOutcomes[outcome] = (missionOutcomes[outcome] || 0) + 1;
      });
    }

    return {
      labels: Object.keys(missionOutcomes),
      datasets: [
        {
          data: Object.values(missionOutcomes),
          backgroundColor: ["#2BB5B6", "#B80015"],
          hoverBackgroundColor: ["#238784", "#F75B58"],
        },
      ],
    };
  };

  const processRocketTypeData = () => {
    const rocketTypes = {};

    if (launchData) {
      launchData.forEach((launch) => {
        const rocketType = launch.rocket?.rocket_type || "Unknown";
        rocketTypes[rocketType] = (rocketTypes[rocketType] || 0) + 1;
      });
    }

    return {
      label: CHART_LABELS.SPACEX_ROCKET_TYPES,
      labels: Object.keys(rocketTypes),
      datasets: [
        {
          data: Object.values(rocketTypes),
          backgroundColor: [
            "#2BB5B6",
            "#B80015",
            "#FF5733",
            "#FFD700",
            "#4CAF50",
          ],
          hoverBackgroundColor: [
            "#238784",
            "#F75B58",
            "#FF8C52",
            "#FFEB3B",
            "#8BC34A",
          ],
        },
      ],
    };
  };

  return (
    <ChartContainer>
      <ChartHeader primaryHeader={"SpaceX Dashboard - Launches"} />
      <Divider />
      <ChartBox>
        <Typography variant={"h6"}>
          {CHART_LABELS.SPACEX_NUMBER_OF_LAUNCHES}
        </Typography>
        {launchData ? (
          <Bar data={processLaunchData()} />
        ) : (
          <ProgressIndicator />
        )}
      </ChartBox>
      <ChartBox>
        <Typography variant={"h6"}>
          {CHART_LABELS.SPACEX_SUCCESS_RATE_PERCENT}
        </Typography>
        {launchData ? (
          <Line data={processSuccessRateData()} />
        ) : (
          <ProgressIndicator />
        )}
      </ChartBox>
      <ChartBox>
        <Typography variant={"h6"}>
          {CHART_LABELS.SPACEX_MISSION_OUTCOMES}
        </Typography>
        {launchData ? (
          <Pie data={processMissionOutcomeData()} />
        ) : (
          <ProgressIndicator />
        )}
      </ChartBox>
      <ChartBox>
        <Typography variant={"h6"}>
          {CHART_LABELS.SPACEX_ROCKET_TYPES}
        </Typography>
        {launchData ? (
          <Doughnut data={processRocketTypeData()} />
        ) : (
          <ProgressIndicator />
        )}
      </ChartBox>
    </ChartContainer>
  );
};

export default SpaceXLaunchesChart;
