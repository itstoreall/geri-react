import React, { PureComponent } from "react";

/**
 * PureComponent - под капотом уже реализован
 * shouldComponentUpdate и идет поверхносное
 * строгое сравнение "===" всех пропсов
 * первой вложенности.
 *
 * Альтернатива - это shouldComponentUpdate(){}
 * Заменить PureComponent на Component и
 * раскомментировать метов ниже
 */

export default class Tabs extends PureComponent {
  state = {
    activeTabIdx: 0,
  };

  // Предотвращает лишние ре-рендоты
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.activeTabIdx !== this.state.activeTabIdx;
  // }

  setActiveTabIdx = (idx) => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    console.log(`Re-render @ ${Date.now()}`);

    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];

    return (
      <>
        <div>
          {items.map((item, idx) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabIdx(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <h2>{activeTab.label}</h2>
        <p>{activeTab.content}</p>
      </>
    );
  }
}
