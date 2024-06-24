import Logo from '@/components/brand/logo';
import GitHubMark from '@/components/ui/github-mark';
import ThemeToggle from '@/components/ui/theme-toggle';
import Link from 'next/link';

const Header = () => {
  return (
    <section className="brand-white border-b-2 border-slate-200 dark:border-slate-600">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <Logo />
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
