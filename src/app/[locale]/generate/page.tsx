"use client";

import RopaForm from "@/components/ropa-form";
import RopaPreview from "@/components/ropa-preview";
import {useState} from "react";


export default function Generate() {

    const [generatedDocument, setGeneratedDocument] = useState<string>("");

    return (
        <main className="container mx-auto py-10 relative space-y-6 w-full">
            <RopaForm setGeneratedDocument={setGeneratedDocument}/>
            {generatedDocument != "" && <RopaPreview generatedDocument={generatedDocument} setGeneratedDocument={setGeneratedDocument}/>}
        </main>
    )
}