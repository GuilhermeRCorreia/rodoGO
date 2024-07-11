interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ width = 30, height = 30, className = '' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 346 258"
      fill="currentColor" // Este fill usa a cor do texto corrente, o que permite mudança de cor via CSS.
      xmlns="http://www.w3.org/2000/svg"
      className="text-black dark:text-white" // Adiciona a classe 'logo' e qualquer outra classe passada via props
    >
      <path d="M229.479 63.6001L166.145 127.333L145.479 128L124.812 128.8L61.8786 192C26.6786 227.333 -0.654728 255.733 0.011939 256.4C0.678606 257.067 12.6786 257.333 26.6786 257.067L52.1453 256.667L116.012 192.4L179.745 128H199.612H219.479L282.545 64.9334C317.079 30.4001 345.479 1.60008 345.479 0.933411C345.479 0.400085 333.612 9.15527e-05 319.079 9.15527e-05H292.679L229.479 63.6001Z" />
      <path d="M229.879 191.6C195.212 226.533 166.812 255.6 166.812 256.267C166.812 257.733 211.745 257.6 216.812 256.133C219.479 255.333 241.079 234.667 282.812 192.8C316.945 158.533 345.079 130 345.212 129.333C345.479 128.533 335.879 128 319.212 128H292.812L229.879 191.6Z" />
      <path d="M63.0667 63.6C28.4 98.5333 0 127.6 0 128.267C0 129.733 44.9333 129.6 50 128.133C52.6667 127.333 74.2667 106.667 116 64.8C150.133 30.5333 178.267 1.99997 178.4 1.3333C178.667 0.533302 169.067 -3.11577e-05 152.4 -3.11577e-05H126L63.0667 63.6Z" />
    </svg>
  );
};

export default Logo;
