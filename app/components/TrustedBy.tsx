"use client";

// Placeholder logos - in a real app these would be SVGs
function Logo({ name }: { name: string }) {
    return (
        <div className="flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity grayscale">
            <span className="text-xl font-bold font-sans tracking-tight text-white">{name}</span>
        </div>
    )
}

export function TrustedBy() {
    return (
        <section className="py-12 border-b border-zinc-900 bg-void">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <p className="text-center text-xs font-mono text-zinc-600 uppercase tracking-widest mb-8">
                    Processing $2B+ annually for market leaders
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                    <Logo name="ACME Corp" />
                    <Logo name="Starlight" />
                    <Logo name="Nexus" />
                    <Logo name="Orbital" />
                    <Logo name="Vertex" />
                </div>
            </div>
        </section>
    )
}
