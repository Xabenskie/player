import React, { useRef, useState } from 'react'

const formatTime = (seconds: number) => {
	const mins = Math.floor(seconds / 60)
	const secs = Math.ceil(seconds % 60)
	return `${mins}:${secs < 10 ? '0' : ''}${secs}`
}

export const VideoPlayer = () => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [videoUrl, setVideoUrl] = useState<string | null>(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]

		if (file) {
			setVideoUrl(URL.createObjectURL(file))
			setIsPlaying(false)
			setCurrentTime(0)
			setDuration(0)
		}
	}

	const handlePlayPause = () => {
		if (!videoRef.current) return

		if (isPlaying) {
			videoRef.current.pause()
		} else {
			videoRef.current.play()
		}
		setIsPlaying(!isPlaying)
	}

	const onTimeUpdate = () => {
		if (videoRef.current) {
			setCurrentTime(videoRef.current.currentTime)
		}
	}

	const onLoadedMetadata = () => {
		if (videoRef.current) {
			setDuration(videoRef.current.duration)
		}
	}

	const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (videoRef.current) {
			const time = Number(e.target.value)
			videoRef.current.currentTime = time
			setCurrentTime(time)
		}
	}

	const onEnded = () => {
		setIsPlaying(false)
	}

	return (
		<div style={{ width: 480, margin: '0 auto' }}>
			{videoUrl ? (
				<video
					ref={videoRef}
					src={videoUrl}
					width='100%'
					height='270px'
					onTimeUpdate={onTimeUpdate}
					onLoadedMetadata={onLoadedMetadata}
					onEnded={onEnded}
					style={{ background: '#000', borderRadius: 8 }}
				/>
			) : (
				<label
					style={{
						display: 'block',
						color: '#888',
						lineHeight: '270px',
						border: '2px dashed #ccc',
						borderRadius: 8,
						cursor: 'pointer',
						textAlign: 'center',
						boxSizing: 'border-box'
					}}
					htmlFor='video-upload'
				>
					<p style={{ margin: 0 }}>Выберите видео</p>
					<input
						type='file'
						accept='video/mp4'
						onChange={handleFileChange}
						style={{ display: 'none' }}
						id='video-upload'
					/>
				</label>
			)}
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					marginTop: 8,
					justifyContent: 'space-between',
					gap: 8
				}}
			>
				<button onClick={handlePlayPause} style={{ marginRight: 8 }}>
					{isPlaying ? 'Pause' : 'Play'}
				</button>
				<input
					type='range'
					min={0}
					max={duration}
					value={currentTime}
					step={0.01}
					onChange={handleProgressChange}
					style={{ width: '100%' }}
				/>
				<span style={{ marginLeft: 8, whiteSpace: 'nowrap' }}>
					{formatTime(currentTime)} / {formatTime(duration)}
				</span>
			</div>
		</div>
	)
}
