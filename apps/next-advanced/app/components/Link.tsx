import NextLink from 'next/link';
import { Link as RadixLink } from '@radix-ui/themes';

type LinkProps = {
  href: string;
  children: string;
};

const Link = ({ href, children }: LinkProps) => {
  return (
    <NextLink href={href} legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default Link;