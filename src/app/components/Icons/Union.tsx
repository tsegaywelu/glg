export default function UnionIcon({
  className,
  textColor,
}: {
  className?: string;
  textColor?: string;
}) {
  return (
    <svg
      width="12"
      height="38"
      viewBox="0 0 12 38"
      fill={textColor}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6.5 38H5.5V37.0713H6.5V38ZM6.5 35.2139H5.5V33.3574H6.5V35.2139ZM6.5 31.5H5.5V29.6426H6.5V31.5ZM6.5 27.7861H5.5V25.9287H6.5V27.7861ZM6.5 24.0713H5.5V22.2139H6.5V24.0713ZM6.5 20.3574H5.5V18.5H6.5V20.3574ZM6.5 16.6426H5.5V14.7861H6.5V16.6426ZM6.5 12.9287H5.5V12H6.5V12.9287ZM6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0Z"
        fill={textColor}
      />
    </svg>
  );
}
