// generate logo using api and ai
import { interpolate, spring } from 'remotion';
import { Arc } from '../../src/HelloWorld/Arc';
import { Circle } from '../../src/HelloWorld/Circle';

export const corporateLogo = () => {
  const arc = new Arc({
    radius: 100,
    startAngle: Math.PI / 2,
    endAngle: Math.PI * 3 / 2,
    fill: '#f2f2f2',
    stroke: '#f2f2f2',
    strokeWidth: 0,
  });

  const circle = new Circle({
    radius: 100,
    fill: '#f2f2f2',
    stroke: '#f2f2f2',
    strokeWidth: 0,
  });

//   const logoFire = new Square({
//     width: 100,
//     height: 100,
//     fill: '#f2f2f2',
//     stroke: '#f2f2f2',
//     strokeWidth: 0,
//     arc: arc,
//     circle: circle,
//     do {
      
//     } while (logoFire.arc.endAngle < Math.PI * 3 / 2);
//   };
// };

    
  const logo = new Circle({
    radius: 100,
    fill: '#f2f2f2',
    stroke: '#f2f2f2',
    strokeWidth: 0,
  });

  const logoText = new Circle({
    radius: 100,
    fill: '#f2f2f2',
    stroke: '#f2f2f2',
    strokeWidth: 0,
  });

  const logoTextPath = new Circle({
    radius: 100,
    fill: '#f2f2f2',
    stroke: '#f2f2f2',
    strokeWidth: 0,
  });

  const logoTextPathText = new Circle({
    radius: 100,
    fill: '#f2f2f2',
    stroke: '#f2f2f2',
    strokeWidth: 0,
  });

  const logoTextPathTextText = new Circle({
    radius: 100,
    fill: '#f2f2f2',
    stroke: '#f2f2f2',
    strokeWidth: 0,
  });

  const logoTextPathTextTextText = new Circle({
    radius: 100,
    fill: '#f2f2f2',
    stroke: '#f2f2f2',
    strokeWidth: 0,
  });

  const logoTextPathTextTextTextText = new Circle({
    radius: 100,
    fill: '#f2f2f2',
    stroke: '#f2f2f2',
    strokeWidth: 0,
  });

  
    
