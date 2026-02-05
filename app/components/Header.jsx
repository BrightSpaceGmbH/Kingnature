export default function Header() {
    return (
        <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
            <div className="flex justify-center items-center">
                <div className="text-2xl font-semibold flex items-center gap-0.5">
                    <span className="text-gray-900">king</span>
                    <span className="text-primary">nature</span>
                    <span className="text-xl ml-1 animate-sway">🌿</span>
                </div>
            </div>
        </header>
    );
}
