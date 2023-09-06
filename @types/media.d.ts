/// <reference types="next/image-types/global" />
declare module '*.svg?inline' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
