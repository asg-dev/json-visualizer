import {useContext} from 'react';

import {Link} from 'react-router-dom';

import styled from '@emotion/styled';
import {Box, Button, Grid, TextField, Tooltip, Typography,} from '@mui/material';
import {APIContext} from '../contexts/APIContext';
import {MAX_FILTERING_OPTS} from '../utils/constants';
import {TEXT_FIELD_TYPES} from '../utils/enums';
import Chooser from './innerComponents/Chooser';
import FilteringOptions, {IndentedTypography} from './innerComponents/FilteringOptions';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloudBolt} from "@fortawesome/free-solid-svg-icons";

const OuterBox = styled(Box)`
  background-color: #e0e0e0;
`;

const TallBox = styled(Box)`
  height: 100%;
`;

export const ContentBox = styled(Box)`
  border-radius: 1%;
  background-color: #f0f0f0;
  padding: 2%;
`;

const KeyValueTextFields = styled(TextField)`
  width: 40%;
  float: ${(props) => props.float || "none"};
`;

const APIChooser = ({performQuery, hasGraphs}) => {
    const {
        selectedAPI,
        setFilteringOptions,
        filteringOptions: filteringOps,
    } = useContext(APIContext);

    // part of a hack to update the filtering options, mentioned below.
    const options = [...filteringOps];

    const buildFilteringOptions = () => {
        // Slight bit of a hack to update the filtering options as the user types.
        const handleInputChange = (type, index, value) => {
            options[index] = {
                ...options[index],
                [type]: value,
            };
            setFilteringOptions(options);
        };

        return [...Array(MAX_FILTERING_OPTS)].map((_, index) => (
            <ContentBox key={index}>
                <KeyValueTextFields
                    placeholder={index ? "&query_param=" : "?query_param="}
                    onChange={(e) =>
                        handleInputChange(TEXT_FIELD_TYPES.Key, index, e.target.value)
                    }
                ></KeyValueTextFields>
                <KeyValueTextFields
                    float="right"
                    placeholder="value"
                    onChange={(e) =>
                        handleInputChange(TEXT_FIELD_TYPES.Value, index, e.target.value)
                    }
                ></KeyValueTextFields>
            </ContentBox>
        ));
    };

    return (
        <Grid item xs={6}>
            <OuterBox>
                <TallBox>
                    <Box sx={{padding: 6}}>
                        <Chooser selectedAPI={selectedAPI}/>
                        <br/>
                        {hasGraphs && (
                            <Typography variant={"overline"}>
                                Graphs are available for this API. Click{" "}
                                <Link to={`/charts/${selectedAPI}`}>here</Link> to view them!
                            </Typography>
                        )}
                        <Tooltip placement={"left"} title={"Shift + Enter also works!"} arrow={true}>
                            <Button
                                sx={{float: "right", border: "1px solid #002"}}
                                onClick={performQuery}
                                size="medium"
                                variant="standard"
                            >
                                <FontAwesomeIcon icon={faCloudBolt} size="1x"/>
                                <IndentedTypography marginLeft={1} variant="caption">
                                    Query
                                </IndentedTypography>
                            </Button>
                        </Tooltip>
                    </Box>
                    <FilteringOptions
                        options={buildFilteringOptions()}
                        primaryText={"Enter filtering options"}
                        secondaryText={"(only query parameters are supported.)"}
                    />
                </TallBox>
            </OuterBox>
        </Grid>
    );
};

export default APIChooser;
