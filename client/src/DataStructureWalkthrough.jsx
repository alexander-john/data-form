import { useParams, Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Editor, { loader } from '@monaco-editor/react'
import walkthroughSteps from './walkthroughSteps'

function DataStructureWalkthrough() {
    const { name } = useParams()
    const [step, setStep] = useState(0)
    const [code, setCode] = useState('')
    const [bgOpacity, setBgOpacity] = useState(0.18)
    const fgEditorRef = useRef(null)
    const bgEditorRef = useRef(null)

    const steps = walkthroughSteps[name] || ["Step 1: Coming soon!"]

    useEffect(() => {
        loader.init().then(monaco => {
            monaco.editor.defineTheme('transparent-theme', {
                base: 'vs',
                inherit: true,
                rules: [],
                colors: {
                    'editor.background': '#00000000',
                }
            })
        })
    }, [])

    // Sync scroll position between editors
    useEffect(() => {
        if (!fgEditorRef.current || !bgEditorRef.current) return

        const fgEditor = fgEditorRef.current
        const bgEditor = bgEditorRef.current

        const onScroll = fgEditor.onDidScrollChange(() => {
            bgEditor.setScrollTop(fgEditor.getScrollTop())
            bgEditor.setScrollLeft(fgEditor.getScrollLeft())
        })

        return () => {
            onScroll.dispose()
        }
    }, [fgEditorRef.current, bgEditorRef.current, step])

    return (
        <div className="container">
            <Link to="/">← Back</Link>
            <h2>{name.replace('-', ' ').toUpperCase()}</h2>
            <p>{steps[step].instruction || steps[step]}</p>
            <button disabled={step === 0} onClick={() => setStep(s => s - 1)}>Previous</button>
            <button disabled={step === steps.length - 1} onClick={() => setStep(s => s + 1)}>Next</button>
            <div style={{ margin: '1rem 0' }}>
                <label>
                    Background Opacity:&nbsp;
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={bgOpacity}
                        onChange={e => setBgOpacity(Number(e.target.value))}
                        style={{ verticalAlign: 'middle' }}
                    />
                    &nbsp;{Math.round(bgOpacity * 100)}%
                </label>
            </div>
            <div style={{ marginTop: '2rem', position: 'relative', height: '500px' }}>
                {/* Reference code editor (background, faded, read-only) */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1,
                        opacity: bgOpacity,
                        pointerEvents: 'none',
                    }}
                >
                    <Editor
                        height="500px"
                        defaultLanguage="javascript"
                        value={steps[step].code || ''}
                        theme="transparent-theme"
                        options={{
                            readOnly: true,
                            minimap: { enabled: false },
                            fontSize: 16,
                            wordWrap: 'on',
                            lineNumbers: 'on',
                            renderLineHighlight: 'none',
                            scrollbar: { vertical: 'hidden', horizontal: 'hidden' },
                            tabSize: 4,
                        }}
                        onMount={editor => { bgEditorRef.current = editor }}
                    />
                </div>
                {/* User editor (foreground, fully interactive) */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 2,
                        opacity: 1,
                    }}
                >
                    <Editor
                        height="500px"
                        defaultLanguage="javascript"
                        value={code}
                        onChange={value => setCode(value)}
                        theme="transparent-theme"
                        options={{
                            minimap: { enabled: false },
                            fontSize: 16,
                            wordWrap: 'on',
                            lineNumbers: 'on',
                            tabSize: 4,
                        }}
                        onMount={editor => { fgEditorRef.current = editor }}
                    />
                </div>
            </div>
        </div>
    )
}

export default DataStructureWalkthrough