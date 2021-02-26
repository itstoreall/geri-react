import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Checkbox,
  CardActionArea,
  Divider,
} from "@material-ui/core";

import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";

const useStyles = makeStyles({
  todosItem: {
    marginBottom: 10,
    backgroundColor: "#eeeeff",
  },
});

const TodoItem = ({
  todo: { id, date, value, urgency, isDone },
  onToggle,
  onDelete,
}) => {
  const frmatedDate = moment(date).format("DD/MM/YYYY hh:mm:ss");
  const handleDelete = () => onDelete(id);
  const handleToggle = () => onToggle(id);
  const { todosItem } = useStyles();

  return (
    <Card className={todosItem}>
      <CardActionArea>
        <CardContent>
          <p>{value}</p>
          <p>{urgency}</p>
          <p>{frmatedDate}</p>
        </CardContent>

        <Divider />

        <CardActions>
          <Checkbox
            checked={isDone}
            onChange={handleToggle}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={handleDelete}
          >
            <DeleteTwoToneIcon />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default TodoItem;
