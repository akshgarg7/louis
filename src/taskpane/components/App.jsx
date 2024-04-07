import * as React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import HeroList from "./HeroList";
import TextInsertion from "./TextInsertion";
import { makeStyles } from "@fluentui/react-components";
import { Ribbon24Regular, LockOpen24Regular, DesignIdeas24Regular, Lightbulb24Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App = (props) => {
  const styles = useStyles();
  // The list items are static and won't change at runtime,
  // so this should be an ordinary const, not a part of state.
  const listItems = [
    {
      icon: <Ribbon24Regular />,
      primaryText: "Get AI assistance in negotiation, communication and redlining.",
    },
    {
      icon: <Lightbulb24Regular />,
      primaryText: "Use senior partner’s negotiation style and preferences",
    },
    {
      icon: <DesignIdeas24Regular />,
      primaryText: "Within the familiar Microsoft Word ecosystem",
    },
  ];

  return (
    <div className={styles.root}>
      <Header logo="assets/logo-filled.png" title={props.title} message="Louis AI" />
      <HeroList message="LouisAI is a negotiation simulator which uses Microsoft Word as a
                         medium to train junior lawyers" items={listItems} />
      <TextInsertion />
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
