# React Actions

## Objectives

1. Explain how modularizing actions helps us modularize applications
2. Describe the anatomy of a React action
3. Practice moving from event handler to generic action

## Overview

The idea here is to move students gradually from passing callbacks (as in the
popover from a few lessons ago) to calling actions and passing them a context
(as in this lesson) to full-blown flux (later on).

Without a store, an action might look like

```javascript
function toggleState(ctx, e) {
  ctx.setState({
    on: !ctx.state.on
  })
}
```

We can use this in a component like

```javascript
// (or import it)
function toggleState(ctx, e) {
  ctx.setState({
    on: !ctx.state.on
  })
}

class Toggler extends React.Component {
  constructor(props) {
    super(props)

    // yeah, sure, JavaScript supports partial application...
    this.toggleState = e => {
      return toggleState(this, e)
    }
  }

  render() {
    return <a onClick={this.toggleState}>{this.state.on ? "HEY" : "HO"}</a>
  }
}
```

This example is a little janky, but it shows that we can modularize the context
of our actions — we now just need an instance of `Toggler` (or anything else
that can be toggled) to use `toggleState`, passing the toggle-able in as `ctx`.

## Resources

- [Flux: Actions](https://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html)
- [Redux: Actions](http://redux.js.org/docs/basics/Actions.html)
