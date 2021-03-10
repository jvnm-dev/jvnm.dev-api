import { Button, Loader, Section } from '../../common'
import React, { ChangeEvent, useRef, useState } from 'react'
import styled from 'styled-components'
import { ToolHeader } from '../../../screens/Tools'

const Result = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const TextareaB64 = styled.textarea`
    flex: 1;
    margin: 16px;
`

const Results = ({ results }: { results: string[] }): JSX.Element => {
    const copyText = async (e: MouseEvent, text: string) => {
        e.preventDefault()

        const target = e.target as HTMLElement
        await navigator.clipboard.writeText(text)
        target.innerText = 'Copied!'

        setTimeout(() => {
            if (target) {
                target.innerText = 'Copy'
            }
        }, 1000)
    }

    return results.map((result: string, index: number) => (
        <Result key={index}>
            <img src={result} width={64} />
            <TextareaB64
                defaultValue={`${
                    result.split(';')[0]
                }... Click the copy button to have full string`}
            />
            <Button
                small="true"
                to="b64"
                onClick={(e: MouseEvent) => copyText(e, result)}
            >
                Copy
            </Button>
        </Result>
    ))
}

export const ImageToBase64 = () => {
    const fileInputRef = useRef(null)
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    const handleFileChange = async (e: ChangeEvent) => {
        const fileInput = e.target as HTMLInputElement
        const filesToProcess = fileInput.files ?? new FileList()

        setLoading(true)
        const convertPromises = Array.from(filesToProcess).map(
            async (file) => await convertImageToBase64(file)
        )

        const convertedImages = await Promise.all(convertPromises)
        setResults(convertedImages)
        setLoading(false)
    }

    const convertImageToBase64 = (file: File) =>
        new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => resolve(fileReader.result)
            fileReader.onerror = (error) => reject(error)
        })

    const openFileDialog = (e: Event) => {
        e.preventDefault()
        if (fileInputRef) {
            const fileInput = fileInputRef.current
            fileInput.click()
        }
    }

    return (
        <>
            <ToolHeader>
                <Button small="true" to="/b64" onClick={openFileDialog}>
                    {results.length ? 'Select new files' : 'Select files'}...
                </Button>

                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    multiple
                    style={{ display: 'none' }}
                />

                {loading && <Loader />}
            </ToolHeader>

            <Results results={results} />
        </>
    )
}
