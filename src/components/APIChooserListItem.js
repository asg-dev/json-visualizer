import React, { useContext } from "react";

import { faImage } from "@fortawesome/free-solid-svg-icons";
import {
  Avatar,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { APIContext } from "../contexts/APIContext";
import { COLORS } from "../utils/constants";
import styled from "@emotion/styled";

const StyledListItemButton = styled(ListItemButton)`
  width: 100%;

  &.Mui-selected {
    background-color: #a0a0a0;
  }

  &.Mui-selected:hover {
    background-color: #a0a0a0;
  }
`;

const APIChooserListItem = ({
  itemAPI,
  selected,
  primaryText,
  secondaryText,
  icon = faImage,
}) => {
  const { setSelectedAPI, setQueriedAPI } = useContext(APIContext);
  const onSelect = () => {
    setSelectedAPI(itemAPI);
    setQueriedAPI(null);
  };

  return (
    <StyledListItemButton selected={selected} onClick={onSelect}>
      <ListItemAvatar>
        <Avatar sx={{ backgroundColor: COLORS.OVERALL_THEME }}>
          <FontAwesomeIcon icon={icon} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </StyledListItemButton>
  );
};

export default APIChooserListItem;
