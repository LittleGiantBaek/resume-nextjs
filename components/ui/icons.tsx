import { ReactElement, SVGProps } from 'react';
import { IconName } from '../../types/resume';

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon({ children, ...props }: IconProps): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

function EmailIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-.5a.5.5 0 0 0-.5.5v.217l6.5 4.33 6.5-4.33V4a.5.5 0 0 0-.5-.5H2Zm12.5 2.383-5.803 3.869a1 1 0 0 1-1.11 0L1.5 5.883V12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V5.883Z" />
    </BaseIcon>
  );
}

function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58L3.654 1.328Z" />
    </BaseIcon>
  );
}

function GithubIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </BaseIcon>
  );
}

function BlogIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M2 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.5a.5.5 0 0 1 1 0V13a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h6.5a.5.5 0 0 1 0 1H2Z" />
      <path d="M4.5 6.5a.5.5 0 0 1 .5-.5h1a4 4 0 0 1 4 4v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5 3 3 0 0 0-3-3 .5.5 0 0 1-.5-.5v-1Zm0 3.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" />
    </BaseIcon>
  );
}

function LinkedinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </BaseIcon>
  );
}

function BellIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917ZM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6Z" />
    </BaseIcon>
  );
}

function QuestionCircleIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16Z" />
      <path d="M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.32v-.355c0-.612.229-.83.886-1.316.617-.457 1.244-.965 1.244-2.05 0-1.401-1.115-2.317-2.646-2.317-1.523 0-2.719.939-2.671 2.433Zm1.762 6.132c.472 0 .862-.371.862-.86a.86.86 0 1 0-1.723 0c0 .489.39.86.861.86Z" />
    </BaseIcon>
  );
}

const iconMap: Record<IconName, (props: IconProps) => ReactElement> = {
  email: EmailIcon,
  phone: PhoneIcon,
  github: GithubIcon,
  blog: BlogIcon,
  linkedin: LinkedinIcon,
  bell: BellIcon,
  'question-circle': QuestionCircleIcon,
};

export function Icon({ name, ...props }: IconProps & { name: IconName }): ReactElement {
  const Component = iconMap[name];
  return <Component {...props} />;
}
