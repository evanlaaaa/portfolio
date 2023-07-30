import { keyframes } from '@chakra-ui/react';
import { IScribbleProps } from '../../types/interface';
import { Keyframes } from '@emotion/react';

const ScribbleEleven = (props: IScribbleProps) => {
  var keyframe: Keyframes = keyframes`
    0% { stroke-dashoffset: '1000px'; }
    99.99% { stroke-dashoffset: 0 }
  `
  return (
    <svg
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      viewBox="0 0 789 531"
      fill={props.fill}
      width={props.w}
      height={props.h}
      transform={props.transform}
      preserveAspectRatio='xMidYMid meet'
      style={{
        animation: `${keyframe.name} 2s linear infinite`
      }}
    >
      <path opacity="1.000000" stroke="none" 
        d="
      M522.514771,384.508850 
        C502.015869,395.163666 481.894379,405.759430 461.581390,415.974426 
        C452.021484,420.781921 441.871246,422.296143 431.055542,420.457581 
        C424.560944,419.353577 417.775940,419.450653 411.150421,419.720123 
        C391.715027,420.510498 372.569885,419.059387 353.997833,412.980713 
        C339.922119,408.373688 331.638458,399.854919 327.471405,386.424133 
        C313.491089,397.424622 294.674683,399.702942 281.115021,391.510376 
        C277.377686,389.252289 274.211823,385.813995 271.319824,382.455597 
        C268.296753,378.945007 265.364655,375.145264 263.370972,371.001282 
        C258.651398,361.191467 250.174942,358.743530 240.627518,359.154480 
        C233.370239,359.466827 226.043457,360.630219 218.974228,362.347748 
        C202.821640,366.272034 190.709686,361.686737 182.885788,347.002716 
        C178.056915,337.939758 173.273727,328.614746 170.289917,318.851196 
        C161.497742,290.081665 136.819992,287.383423 117.129486,291.448181 
        C108.843369,293.158722 100.772598,295.886932 92.526276,297.821533 
        C78.947563,301.007141 66.258995,293.629150 62.955032,280.892303 
        C59.575092,267.862579 66.729393,255.602585 80.418518,251.789871 
        C91.294838,248.760590 102.220650,245.671936 113.320549,243.730759 
        C138.034912,239.408661 161.324249,243.922287 182.598236,257.362732 
        C196.935349,266.420593 205.700256,280.023560 212.056961,295.382568 
        C213.960327,299.981476 216.113052,304.495667 217.700012,309.200958 
        C218.848862,312.607208 220.549118,313.138062 223.957092,312.606750 
        C242.079224,309.781372 259.750488,311.265045 276.590118,319.109314 
        C287.856354,324.357330 296.004608,332.896118 302.182007,343.484711 
        C303.766449,346.200562 305.550140,347.588226 309.192383,347.671906 
        C319.023773,347.897827 326.008240,353.163086 330.471466,362.295776 
        C331.065033,361.266937 331.662231,360.646240 331.796783,359.937714 
        C334.832520,343.948608 344.461060,330.849731 350.806671,316.315491 
        C355.593201,305.352203 362.542023,296.140625 372.204376,289.242096 
        C401.312317,268.460022 430.379272,247.609650 459.842194,227.338226 
        C503.223602,197.490433 549.462524,172.808960 598.113953,152.655426 
        C613.736145,146.184052 629.326721,139.635239 644.985413,133.253540 
        C661.308838,126.600906 677.377869,127.111221 692.192810,136.976379 
        C709.700867,148.634811 726.678284,161.067215 735.428223,181.370514 
        C757.640442,207.583054 741.442688,245.154388 718.537109,262.379852 
        C709.936462,268.847717 700.880554,274.950867 691.338257,279.875397 
        C671.905334,289.904114 653.402832,301.271271 636.255066,314.801453 
        C609.092590,336.233521 578.275269,351.757996 548.693970,369.281372 
        C540.113770,374.364105 531.442993,379.293823 522.514771,384.508850 
      M622.726196,217.775360 
        C618.857788,211.616379 614.989380,205.457413 610.989624,199.089249 
        C606.091919,201.323807 600.901367,203.509735 595.871582,206.018127 
        C573.611877,217.119232 550.466980,226.804474 529.382996,239.821320 
        C496.464569,260.144531 465.009003,282.830688 432.780396,304.285461 
        C428.563080,307.092957 428.441010,309.536133 430.506256,313.589935 
        C439.731689,331.697754 453.209045,346.217529 468.778198,359.702393 
        C530.253418,325.593658 591.861328,291.588379 647.197144,247.880646 
        C639.521912,238.478241 631.317749,228.427872 622.726196,217.775360 
      M661.455078,190.017136 
        C670.835693,201.364685 680.216309,212.712219 690.123535,224.696793 
        C692.586426,221.295792 694.850159,218.479507 696.716797,215.420944 
        C697.353149,214.378204 697.510864,212.485809 697.003967,211.390472 
        C692.696411,202.083221 688.733276,192.516037 679.390747,186.735901 
        C676.868835,185.175583 674.747498,182.977173 672.394531,181.132599 
        C665.280701,175.555618 663.373657,175.596909 655.981689,181.519180 
        C657.651917,184.147156 659.335083,186.795563 661.455078,190.017136 
      M398.549347,352.903107 
        C396.325958,349.444000 394.102570,345.984924 391.603455,342.096802 
        C390.151764,345.107849 388.959595,347.580627 388.050781,349.465637 
        C393.133392,355.902496 398.516205,361.498322 402.361633,368.003052 
        C405.093384,372.623901 407.904541,372.407562 412.075775,371.534485 
        C407.519165,365.274933 403.235443,359.390259 398.549347,352.903107 
      z"/>
    </svg>
  );
};

export default ScribbleEleven;
