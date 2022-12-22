import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
  } from "reactstrap";
  
function CoralList({corals}) {

    let items = corals
    let link = 'coral';

    return (
      <section>

        <button className="button" >
          <NavLink to="/createcoral" className="button-text">ADD CORAL</NavLink>
        </button>
  
        <Card>
          <CardBody>
            {items.map(item => (
              <Link to={`/${link}/${item.handle}`} key={item.handle}>
                <ListGroupItem className="list">{item.name}
                </ListGroupItem>
              </Link>
            ))}
  
          </CardBody>
        </Card>
      </section>
    );
  }
  
    


export default CoralList;