import { Component } from "react";
import moment from "moment";
// import { makeStyles } from "@material-ui/core/styles"; // не удалять
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

class TodoItemClass extends Component {
  // Консолим id после рендера
  componentDidUpdate() {
    console.log("render", this.props.todo.id);
  }

  // Проверка на рендеринг элементов только с измененными props
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.todo.isDone !== this.props.todo.isDone;
  }

  render() {
    const {
      todo: { id, date, value, urgency, isDone },
      onToggle,
      onDelete,
    } = this.props;
    const frmatedDate = moment(date).format("DD/MM/YYYY hh:mm:ss");

    return (
      <Card>
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
              onChange={() => {
                onToggle(id);
              }}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => {
                onDelete(id);
              }}
            >
              <DeleteTwoToneIcon />
            </IconButton>
          </CardActions>
        </CardActionArea>
      </Card>
    );
  }
}

export default TodoItemClass;
