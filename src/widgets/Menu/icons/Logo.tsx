import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 620 128" {...props}>
      <g>
        <path
          d="M115,64.33c-1.51,8.16-5.28,15.76-9.58,22.86C92.25,108.88,67.28,113.84,43,114.39c-6.66.15-13.5.12-19.78-2.22-1.52-.57-11.52-5.54-13.06-14-1.34-7.42,5-11.41,12.33-23C35.07,55.39,28.66,48.39,40.84,32.6c4.46-5.78,11.08-14.36,22.74-17.69,14-4,29.4,1.15,39.29,10.94,8.63,8.53,14,24.37,12.5,36.07C115.26,62.73,115.14,63.53,115,64.33Z"
          transform="translate(-10 -13.56)"
          fill="#f2ce36"
        />
        <path
          d="M88,34.87a56.53,56.53,0,0,0-25,9.46c-2.56,1.76-6,3.77-8.54,1.9a5.07,5.07,0,0,1-1.58-2.08c-2.25-5.07,1.14-10.79,5.29-14.35a35,35,0,0,1,29.1-7.53C99.75,24.7,101.4,33.22,88,34.87Z"
          transform="translate(-10 -13.56)"
          fill="#fff"
          opacity="0.15"
        />
        <path
          d="M53.88,110a1.44,1.44,0,0,0,.8-.48,1.41,1.41,0,0,0-.11-1.37c-1.31-2.55-4.58-2.76-7.26-2.91a39.66,39.66,0,0,1-17.18-5.1c-4.68-2.65-9.32-6.38-14.5-6.28a2.74,2.74,0,0,0-1.64.44,2.61,2.61,0,0,0-.82,1.42c-.64,2.47.51,5.27,2.32,7.15a18.2,18.2,0,0,0,6.51,4C32.52,111.16,43.28,113.31,53.88,110Z"
          transform="translate(-10 -13.56)"
          fill="#e2b440"
          opacity="0.25"
        />
        <path
          d="M105.6,31a2.93,2.93,0,0,0-.58,1.5c-.18,1.51.91,3.9,1.74,5.16a3.33,3.33,0,0,0,2.36,1.57.6.6,0,0,0,.44-.07.67.67,0,0,0,.21-.47c.25-2-1.5-3.76-2.19-5.72a8.45,8.45,0,0,0-.59-1.57C106.47,30.58,106,30.62,105.6,31Z"
          transform="translate(-10 -13.56)"
          fill="#e2b440"
          opacity="0.33"
        />
        <path
          d="M106.74,33c.79-1.36,4.15-2.82,5.51-1.28a2.14,2.14,0,0,1,.35.69,3.22,3.22,0,0,1,.26,1.61c-.25,1.26-2.73,1.38-3.7,2a1.55,1.55,0,0,1-.64.26,1.22,1.22,0,0,1-.9-.44C106.47,34.64,106.33,33.73,106.74,33Z"
          transform="translate(-10 -13.56)"
          fill="#c67640"
        />
        <g>
          <path
            d="M103.19,43.54c-3.27,10.26-2.8,21.55.23,32s8.54,20.18,15.13,29c-2.2-11.79-.09-23.8.33-35.73.29-8.14-.3-16.66-3.49-24.35-.82-2-3.72-9.27-6.26-9.49C106.18,34.7,103.82,41.54,103.19,43.54Z"
            transform="translate(-10 -13.56)"
            fill="#2a9e3a"
          />
          <path
            d="M109.12,35c-2.59-1.37-5.48,7.11-5.93,8.55-3.27,10.26-2.8,21.55.23,32a86.17,86.17,0,0,0,15,28.76c-1.44-1.84-1.49-4.31-2.24-6.42-.87-2.47-1.73-4.94-2.5-7.43C110,78.8,109.18,66.28,110,54.2c.2-3.19.57-6.37.62-9.57a33.1,33.1,0,0,0-.24-5c-.11-.87-.31-4.11-1.12-4.61Z"
            transform="translate(-10 -13.56)"
            fill="#3dad55"
          />
        </g>
      </g>
      <g>
        <path
          d="M141.81,87.28V39.93h11.7L161.13,61q.74,2.1,1.38,4.32c.44,1.48.9,2.94,1.38,4.4h.29c.49-1.46.94-2.92,1.35-4.4s.86-2.92,1.34-4.32l7.48-21.06H186V87.28h-9.73V69.92c0-1.16,0-2.44.15-3.85s.22-2.82.36-4.25.29-2.83.44-4.21.29-2.65.43-3.81h-.29l-3.85,11.26-6.75,18.08h-5.89l-6.75-18.08L150.31,53.8H150c.15,1.16.29,2.43.44,3.81s.29,2.79.43,4.21.27,2.85.37,4.25.14,2.69.14,3.85V87.28Z"
          transform="translate(-10 -13.56)"
          fill={textColor}
        />
        <path
          d="M205.37,88.15a11.6,11.6,0,0,1-4.47-.83A9.66,9.66,0,0,1,197.52,85a10.94,10.94,0,0,1-2.14-3.45,11.72,11.72,0,0,1-.76-4.29,10.09,10.09,0,0,1,4.79-8.86q4.8-3.2,15.47-4.29a6.11,6.11,0,0,0-1.41-3.81c-.85-.94-2.27-1.42-4.25-1.42a13,13,0,0,0-4.62.87,34.25,34.25,0,0,0-4.9,2.4l-3.85-7a37.58,37.58,0,0,1,7.3-3.42,24.83,24.83,0,0,1,8.1-1.31q7,0,10.64,4t3.67,12.31V87.28h-8.72l-.72-3.7h-.29a23.12,23.12,0,0,1-4.87,3.3A12.31,12.31,0,0,1,205.37,88.15ZM209,79.87a5.88,5.88,0,0,0,3.12-.79,15.71,15.71,0,0,0,2.76-2.26V70.5c-3.77.54-6.39,1.31-7.84,2.33a4.4,4.4,0,0,0-2.18,3.63A3,3,0,0,0,206,79,4.94,4.94,0,0,0,209,79.87Z"
          transform="translate(-10 -13.56)"
          fill={textColor}
        />
        <path
          d="M234.56,87.28v-36h8.72l.73,4.57h.29A29.18,29.18,0,0,1,249.38,52a12.47,12.47,0,0,1,6.47-1.64q5.88,0,8.53,3.85T267,64.91V87.28H256.36v-21c0-2.61-.36-4.4-1.06-5.37a3.89,3.89,0,0,0-3.38-1.46,6.49,6.49,0,0,0-3.48.91,20.76,20.76,0,0,0-3.2,2.58V87.28Z"
          transform="translate(-10 -13.56)"
          fill={textColor}
        />
        <path
          d="M289,102.61a29.64,29.64,0,0,1-5.92-.55,17.47,17.47,0,0,1-4.8-1.63A8.6,8.6,0,0,1,275,97.6a7.36,7.36,0,0,1-1.16-4.14q0-4.36,5.16-7.27V85.9a8.16,8.16,0,0,1-2.4-2.39,7.09,7.09,0,0,1,.22-7.45,10.93,10.93,0,0,1,2.9-3v-.29A12.38,12.38,0,0,1,276.36,69a10.61,10.61,0,0,1-1.48-5.63,12.54,12.54,0,0,1,1.23-5.71,12,12,0,0,1,3.31-4.06,14.17,14.17,0,0,1,4.75-2.44,19.64,19.64,0,0,1,5.6-.8,16.36,16.36,0,0,1,5.59.88H308.5V59h-5.73a7.26,7.26,0,0,1,.83,2,10.43,10.43,0,0,1,.33,2.69,12.41,12.41,0,0,1-1.09,5.41,10.29,10.29,0,0,1-3,3.78,13.11,13.11,0,0,1-4.51,2.21,20.18,20.18,0,0,1-5.55.73,14,14,0,0,1-4.36-.73,3.64,3.64,0,0,0-1,1.16,3.51,3.51,0,0,0-.29,1.53,2.15,2.15,0,0,0,1.2,2,9.59,9.59,0,0,0,4.25.66h5.81q6.67,0,10.2,2.14t3.53,7a9.92,9.92,0,0,1-1.42,5.19,12.61,12.61,0,0,1-4,4.07,21.69,21.69,0,0,1-6.32,2.69A32.88,32.88,0,0,1,289,102.61Zm1.67-6.68a12.29,12.29,0,0,0,5.95-1.28c1.55-.84,2.33-1.9,2.33-3.15a2.21,2.21,0,0,0-1.42-2.26,11.4,11.4,0,0,0-4.1-.58h-3.71c-1.26,0-2.27,0-3.05-.11a14.22,14.22,0,0,1-2-.32,4.85,4.85,0,0,0-2,3.56,3.31,3.31,0,0,0,2.18,3.08A13.49,13.49,0,0,0,290.64,95.93Zm-.87-26.52a4.67,4.67,0,0,0,3.52-1.48,6.41,6.41,0,0,0,1.41-4.54,6.08,6.08,0,0,0-1.41-4.33,4.67,4.67,0,0,0-3.52-1.48A4.73,4.73,0,0,0,286.24,59a6,6,0,0,0-1.41,4.36,6.41,6.41,0,0,0,1.41,4.54A4.68,4.68,0,0,0,289.77,69.41Z"
          transform="translate(-10 -13.56)"
          fill={textColor}
        />
        <path
          d="M329.06,88.15a17.66,17.66,0,0,1-6.61-1.27,16.62,16.62,0,0,1-5.63-3.67,17.46,17.46,0,0,1-3.88-5.91,20.9,20.9,0,0,1-1.46-8,20.9,20.9,0,0,1,1.46-8,17.61,17.61,0,0,1,3.88-5.92,16.75,16.75,0,0,1,5.63-3.66,17.67,17.67,0,0,1,6.61-1.28,17.35,17.35,0,0,1,6.57,1.28,16.92,16.92,0,0,1,5.6,3.66,17.76,17.76,0,0,1,3.88,5.92,20.9,20.9,0,0,1,1.46,8,20.9,20.9,0,0,1-1.46,8,17.61,17.61,0,0,1-3.88,5.91,16.79,16.79,0,0,1-5.6,3.67A17.34,17.34,0,0,1,329.06,88.15Zm0-8.64A5.41,5.41,0,0,0,334,76.75a14.42,14.42,0,0,0,1.67-7.48A14.42,14.42,0,0,0,334,61.79a5.83,5.83,0,0,0-9.91,0,14.63,14.63,0,0,0-1.64,7.48,14.63,14.63,0,0,0,1.64,7.48A5.38,5.38,0,0,0,329.06,79.51Z"
          transform="translate(-10 -13.56)"
          fill={textColor}
        />
        <path
          d="M369.3,87.28V39.93h29.85v9H380v11h16.41v9H380V87.28Z"
          transform="translate(-10 -13.56)"
          fill={textColor}
        />
        <path
          d="M411.79,46a6.39,6.39,0,0,1-4.43-1.56,5.17,5.17,0,0,1-1.75-4,5.06,5.06,0,0,1,1.75-4,7.24,7.24,0,0,1,8.9,0,5.11,5.11,0,0,1,1.7,4,5.23,5.23,0,0,1-1.7,4A6.37,6.37,0,0,1,411.79,46Zm-5.3,41.33v-36h10.67v36Z"
          transform="translate(-10 -13.56)"
          fill={textColor}
        />
        <path
          d="M426.53,87.28v-36h8.72l.72,4.57h.29A29.25,29.25,0,0,1,441.35,52a12.43,12.43,0,0,1,6.46-1.64q5.9,0,8.54,3.85T459,64.91V87.28H448.32v-21q0-3.92-1.05-5.37a3.89,3.89,0,0,0-3.38-1.46,6.52,6.52,0,0,0-3.49.91A21.23,21.23,0,0,0,437.21,63V87.28Z"
          transform="translate(-10 -13.56)"
          fill={textColor}
        />
        <path
          d="M477.16,88.15a11.6,11.6,0,0,1-4.47-.83A9.66,9.66,0,0,1,469.31,85a10.94,10.94,0,0,1-2.14-3.45,11.72,11.72,0,0,1-.76-4.29,10.07,10.07,0,0,1,4.79-8.86q4.8-3.2,15.47-4.29a6.06,6.06,0,0,0-1.42-3.81c-.84-.94-2.26-1.42-4.24-1.42a12.91,12.91,0,0,0-4.62.87,34.25,34.25,0,0,0-4.9,2.4l-3.85-7a37.31,37.31,0,0,1,7.3-3.42,24.83,24.83,0,0,1,8.1-1.31q7,0,10.64,4t3.67,12.31V87.28h-8.72l-.72-3.7h-.3a22.81,22.81,0,0,1-4.86,3.3A12.31,12.31,0,0,1,477.16,88.15Zm3.63-8.28a5.88,5.88,0,0,0,3.12-.79,15.71,15.71,0,0,0,2.76-2.26V70.5c-3.78.54-6.39,1.31-7.84,2.33a4.38,4.38,0,0,0-2.18,3.63A3,3,0,0,0,477.77,79,4.94,4.94,0,0,0,480.79,79.87Z"
          transform="translate(-10 -13.56)"
          fill={textColor}
        />
        <path
          d="M506.35,87.28v-36h8.72l.73,4.57h.29A29.18,29.18,0,0,1,521.17,52a12.47,12.47,0,0,1,6.47-1.64q5.88,0,8.53,3.85t2.65,10.68V87.28H528.14v-21q0-3.92-1-5.37a3.89,3.89,0,0,0-3.38-1.46,6.46,6.46,0,0,0-3.48.91A20.76,20.76,0,0,0,517,63V87.28Z"
          transform="translate(-10 -13.56)"
          fill={textColor}
        />
        <path
          d="M563.59,88.15a18.91,18.91,0,0,1-7-1.27A16.15,16.15,0,0,1,551,83.21a17,17,0,0,1-3.78-5.91,21.91,21.91,0,0,1-1.38-8,20,20,0,0,1,1.53-8,17.52,17.52,0,0,1,4.1-5.92,17.9,17.9,0,0,1,6-3.66,20.21,20.21,0,0,1,7.12-1.28,15.21,15.21,0,0,1,5.92,1.09,18.74,18.74,0,0,1,4.61,2.76l-5,6.9a7.76,7.76,0,0,0-4.86-2.1A7.54,7.54,0,0,0,559,61.79a11.49,11.49,0,0,0-2.25,7.48,11.33,11.33,0,0,0,2.29,7.48,7.18,7.18,0,0,0,5.77,2.76,7.86,7.86,0,0,0,3.38-.76,17.92,17.92,0,0,0,3.09-1.85l4.21,7a16.24,16.24,0,0,1-5.81,3.3A20.12,20.12,0,0,1,563.59,88.15Z"
          transform="translate(-10 -13.56)"
          fill={textColor}
        />
        <path
          d="M595.91,88.15a20,20,0,0,1-7.19-1.27,16.41,16.41,0,0,1-5.81-3.7,16.91,16.91,0,0,1-3.85-5.92,21.62,21.62,0,0,1-1.38-8,20.45,20.45,0,0,1,1.45-7.88,18.82,18.82,0,0,1,3.81-6,16.62,16.62,0,0,1,5.42-3.74,15.9,15.9,0,0,1,6.32-1.31,16.07,16.07,0,0,1,6.71,1.31,13.26,13.26,0,0,1,4.8,3.63,15.46,15.46,0,0,1,2.87,5.49,24.15,24.15,0,0,1,.94,6.86,26.81,26.81,0,0,1-.14,2.76,19.17,19.17,0,0,1-.3,2H588a8.86,8.86,0,0,0,3.23,5.78A10.08,10.08,0,0,0,597.36,80a14.79,14.79,0,0,0,7.77-2.4l3.56,6.47a23.39,23.39,0,0,1-6.13,3A21.52,21.52,0,0,1,595.91,88.15Zm-8-22.8h13a8.17,8.17,0,0,0-1.38-4.94q-1.38-1.89-4.65-1.89a6.61,6.61,0,0,0-4.46,1.67A8.36,8.36,0,0,0,587.92,65.35Z"
          transform="translate(-10 -13.56)"
          fill={textColor}
        />
      </g>
    </Svg>
  );
};

export default Logo;