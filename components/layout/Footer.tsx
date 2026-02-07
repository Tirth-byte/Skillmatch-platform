export function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-white/10 py-12 transition-colors">
            <div className="container mx-auto px-4 md:px-6 text-center text-gray-500 dark:text-gray-400 text-sm">
                <p>&copy; {new Date().getFullYear()} AI Skill Matcher. All rights reserved.</p>
            </div>
        </footer>
    );
}
