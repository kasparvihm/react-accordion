import React, { Component } from 'react';
import { Accordion, AccordionItem } from './components/react-accordion';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2>Default open</h2>
        <Accordion isAnimated>
          <AccordionItem caption="First" name="a" defaultOpen>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </AccordionItem>
          <AccordionItem caption="Second" name="b">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </AccordionItem>
          <AccordionItem caption="Third" name="c">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </AccordionItem>
          <AccordionItem caption="Fourth" name="d">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </AccordionItem>
        </Accordion>

        <h2>With animation</h2>
        <Accordion isAnimated>
          <AccordionItem caption="First" name="a">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </AccordionItem>
          <AccordionItem caption="Second" name="b">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </AccordionItem>
          <AccordionItem caption="Third" name="c">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </AccordionItem>
          <AccordionItem caption="Fourth" name="d">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </AccordionItem>
        </Accordion>

        <h2>Without animation</h2>
        <Accordion>
          <AccordionItem caption="First" name="a">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </AccordionItem>
          <AccordionItem caption="Second" name="b">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </AccordionItem>
          <AccordionItem caption="Third" name="c">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </AccordionItem>
          <AccordionItem caption="Fourth" name="d">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </AccordionItem>
        </Accordion>

        <h2>Keep expanded item open</h2>
        <Accordion isAnimated allowMultiple>
          <AccordionItem caption="First" name="a">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </AccordionItem>
          <AccordionItem caption="Second" name="b">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </AccordionItem>
          <AccordionItem caption="Third" name="c">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </AccordionItem>
          <AccordionItem caption="Fourth" name="d">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default App;
