import styled from '@emotion/styled';
import {Box, Typography,} from '@mui/material';

// TODO: these should probably live in a separate file, available to all components, and must be extensively configurable.
const FilteringOptionsBox = styled(Box)`
  border-radius: 4px;
  background-color: #f0f0f0;
  padding: 2px;
  border: 1px solid #c0c0c0;
`;

export const IndentedTypography = styled(Typography)`
  margin-left: ${(props) => props.marginLeft || "1rem"};
`;

function FilteringOptions({options, primaryText, secondaryText}) {
    return (
        <Box sx={{padding: 6}}>
            <Typography variant="h5">
                {primaryText}
                <IndentedTypography variant="caption" marginLeft="1rem">
                    {secondaryText}
                </IndentedTypography>
            </Typography>

            <br/>
            <FilteringOptionsBox>{options}</FilteringOptionsBox>
        </Box>
    );
}

export default FilteringOptions;
