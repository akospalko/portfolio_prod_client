// Project cards: add custom border radii for different items at different grid locations   
import './addConditionalBorderStyle.css';

export const addConditionalBorderStyle = (array, i, columnCount) => {
  if (array.length === 0) return {};

  const index = i + 1;
  const borderRadiusStyle = { item: '', itemImg: '' };

  if (array.length === 1) {
    borderRadiusStyle.item = 'border-radius-full';
    borderRadiusStyle.itemImg = 'border-radius-bottom';
  } else if (columnCount === 1) {
    if (index === 1) {
      borderRadiusStyle.item = 'border-radius-top';
    } else if (index === array.length) {
      borderRadiusStyle.item = 'border-radius-bottom';
      borderRadiusStyle.itemImg = 'border-radius-bottom';
    }
  } else if (array.length <= columnCount) {
    if (index === 1) {
      borderRadiusStyle.item = 'border-radius-left';
      borderRadiusStyle.itemImg = 'border-radius-bottom-left';
    } else if (index === array.length) {
      borderRadiusStyle.item = 'border-radius-right';
      borderRadiusStyle.itemImg = 'border-radius-bottom-right';
    }
  } else {
    if (columnCount === 3) {
      if (index === 1) {
        borderRadiusStyle.item = 'border-radius-top-left';
      } else if (index === 3) {
        borderRadiusStyle.item = 'border-radius-top-right';
      } else if (index === array.length) {
        const remainder = array.length % 3;
        if (remainder === 1) {
          borderRadiusStyle.item = 'border-radius-bottom-left';
          borderRadiusStyle.itemImg = 'border-radius-bottom-left';
        } else if (remainder === 0) {
          borderRadiusStyle.item = 'border-radius-bottom-right';
          borderRadiusStyle.itemImg = 'border-radius-bottom-right';
        }
      } else if (index === array.length - 1 && array.length % 3 === 2) {
        borderRadiusStyle.item = 'border-radius-bottom-left';
        borderRadiusStyle.itemImg = 'border-radius-bottom-left';
      } else if (index === array.length - 2 && array.length % 3 === 0) {
        borderRadiusStyle.item = 'border-radius-bottom-left';
        borderRadiusStyle.itemImg = 'border-radius-bottom-left';
      }
    } else if (columnCount === 2) {
      if (index === 1) {
        borderRadiusStyle.item = 'border-radius-top-left';
      } else if (index === 2) {
        borderRadiusStyle.item = 'border-radius-top-right';
      } else if (index === array.length) {
        if (array.length % 2 !== 0) {
          borderRadiusStyle.item = 'border-radius-bottom-left';
          borderRadiusStyle.itemImg = 'border-radius-left';
        } else {
          borderRadiusStyle.item = 'border-radius-bottom-right';
          borderRadiusStyle.itemImg = 'border-radius-right';
        }
      } else if (index === array.length - 1 && array.length % 2 === 0) {
        borderRadiusStyle.item = 'border-radius-bottom-left';
        borderRadiusStyle.itemImg = 'border-radius-left';
      }
    }
  }

  return borderRadiusStyle;
};