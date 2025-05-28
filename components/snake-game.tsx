"use client"

import { useEffect, useRef } from "react"

interface Point {
  x: number
  y: number
}

export function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Game variables
    const gridSize = 20
    // Initialize snake with 4 segments
    const snake: Point[] = [
      { x: 5, y: 5 },
      { x: 4, y: 5 },
      { x: 3, y: 5 },
      { x: 2, y: 5 },
    ]
    let food: Point = { x: 10, y: 10 }
    let direction = { x: 1, y: 0 }
    let score = 0
    const speed = 150 // ms per move
    let lastTime = 0
    let gameRunning = true

    // Generate random food position
    const generateFood = () => {
      const maxX = Math.floor(canvas.width / gridSize) - 1
      const maxY = Math.floor(canvas.height / gridSize) - 1
      food = {
        x: Math.floor(Math.random() * maxX),
        y: Math.floor(Math.random() * maxY),
      }

      // Make sure food doesn't spawn on snake
      for (const segment of snake) {
        if (segment.x === food.x && segment.y === food.y) {
          generateFood()
          break
        }
      }
    }

    // Improved pathfinding to move directly toward food
    const moveTowardFood = () => {
      const head = snake[0]

      // Calculate direction to food
      const dx = food.x - head.x
      const dy = food.y - head.y

      // Determine best direction to move
      let newDirection = { ...direction }

      // Check if we can move directly to the food
      if (dx === 0 && dy !== 0) {
        // We're aligned on x-axis, move vertically
        newDirection = { x: 0, y: dy > 0 ? 1 : -1 }
      } else if (dy === 0 && dx !== 0) {
        // We're aligned on y-axis, move horizontally
        newDirection = { x: dx > 0 ? 1 : -1, y: 0 }
      } else {
        // We need to align on one axis first
        // Prioritize x-axis alignment first, then y-axis
        if (Math.abs(dx) >= Math.abs(dy)) {
          // Try to move horizontally first
          if (dx > 0 && direction.x !== -1) {
            newDirection = { x: 1, y: 0 }
          } else if (dx < 0 && direction.x !== 1) {
            newDirection = { x: -1, y: 0 }
          } else {
            // Can't move horizontally, try vertically
            if (dy > 0 && direction.y !== -1) {
              newDirection = { x: 0, y: 1 }
            } else if (dy < 0 && direction.y !== 1) {
              newDirection = { x: 0, y: -1 }
            }
          }
        } else {
          // Try to move vertically first
          if (dy > 0 && direction.y !== -1) {
            newDirection = { x: 0, y: 1 }
          } else if (dy < 0 && direction.y !== 1) {
            newDirection = { x: 0, y: -1 }
          } else {
            // Can't move vertically, try horizontally
            if (dx > 0 && direction.x !== -1) {
              newDirection = { x: 1, y: 0 }
            } else if (dx < 0 && direction.x !== 1) {
              newDirection = { x: -1, y: 0 }
            }
          }
        }
      }

      // Avoid making unnecessary turns
      // If we're already moving toward the food on one axis, continue that way
      if (
        (direction.x === 1 && dx > 0) ||
        (direction.x === -1 && dx < 0) ||
        (direction.y === 1 && dy > 0) ||
        (direction.y === -1 && dy < 0)
      ) {
        newDirection = direction
      }

      // Very rarely add some randomness (reduced from 10% to 2%)
      if (Math.random() < 0.02) {
        const directions = [
          { x: 1, y: 0 },
          { x: -1, y: 0 },
          { x: 0, y: 1 },
          { x: 0, y: -1 },
        ]

        // Filter out the opposite of current direction to avoid 180° turns
        const validDirections = directions.filter((dir) => !(dir.x === -direction.x && dir.y === -direction.y))

        newDirection = validDirections[Math.floor(Math.random() * validDirections.length)]
      }

      direction = newDirection
    }

    // Draw angry face on snake head
    const drawAngryFace = (x: number, y: number) => {
      // Determine face orientation based on direction
      const faceX = x * gridSize
      const faceY = y * gridSize

      // Draw the face with a slightly brighter color than the body
      ctx.fillStyle = "rgba(219, 39, 119, 0.7)" // Brighter cherry color for the head
      ctx.fillRect(faceX, faceY, gridSize, gridSize)

      // Set color for facial features
      ctx.fillStyle = "rgba(0, 0, 0, 0.8)" // Dark color for eyes and mouth

      // Draw eyes based on direction
      const eyeSize = gridSize / 5
      const eyeOffset = gridSize / 4

      if (direction.x === 1) {
        // Moving right
        // Left eye
        ctx.fillRect(faceX + gridSize - eyeOffset - eyeSize, faceY + eyeOffset, eyeSize, eyeSize)
        // Right eye
        ctx.fillRect(faceX + gridSize - eyeOffset - eyeSize, faceY + gridSize - eyeOffset - eyeSize, eyeSize, eyeSize)
        // Mouth (angry)
        ctx.fillRect(faceX + gridSize - eyeOffset, faceY + gridSize / 2 - eyeSize / 2, eyeSize, eyeSize)

        // Eyebrows (angry)
        ctx.fillRect(
          faceX + gridSize - eyeOffset - eyeSize - eyeSize / 2,
          faceY + eyeOffset - eyeSize / 2,
          eyeSize * 1.5,
          eyeSize / 2,
        )
        ctx.fillRect(
          faceX + gridSize - eyeOffset - eyeSize - eyeSize / 2,
          faceY + gridSize - eyeOffset - eyeSize - eyeSize / 2,
          eyeSize * 1.5,
          eyeSize / 2,
        )
      } else if (direction.x === -1) {
        // Moving left
        // Left eye
        ctx.fillRect(faceX + eyeOffset, faceY + eyeOffset, eyeSize, eyeSize)
        // Right eye
        ctx.fillRect(faceX + eyeOffset, faceY + gridSize - eyeOffset - eyeSize, eyeSize, eyeSize)
        // Mouth (angry)
        ctx.fillRect(faceX + eyeOffset - eyeSize, faceY + gridSize / 2 - eyeSize / 2, eyeSize, eyeSize)

        // Eyebrows (angry)
        ctx.fillRect(faceX + eyeOffset, faceY + eyeOffset - eyeSize / 2, eyeSize * 1.5, eyeSize / 2)
        ctx.fillRect(
          faceX + eyeOffset,
          faceY + gridSize - eyeOffset - eyeSize - eyeSize / 2,
          eyeSize * 1.5,
          eyeSize / 2,
        )
      } else if (direction.y === -1) {
        // Moving up
        // Left eye
        ctx.fillRect(faceX + eyeOffset, faceY + eyeOffset, eyeSize, eyeSize)
        // Right eye
        ctx.fillRect(faceX + gridSize - eyeOffset - eyeSize, faceY + eyeOffset, eyeSize, eyeSize)
        // Mouth (angry)
        ctx.fillRect(faceX + gridSize / 2 - eyeSize / 2, faceY + eyeOffset - eyeSize, eyeSize, eyeSize)

        // Eyebrows (angry)
        ctx.fillRect(faceX + eyeOffset - eyeSize / 2, faceY + eyeOffset - eyeSize / 2, eyeSize * 1.5, eyeSize / 2)
        ctx.fillRect(
          faceX + gridSize - eyeOffset - eyeSize - eyeSize,
          faceY + eyeOffset - eyeSize / 2,
          eyeSize * 1.5,
          eyeSize / 2,
        )
      } else {
        // Moving down
        // Left eye
        ctx.fillRect(faceX + eyeOffset, faceY + gridSize - eyeOffset - eyeSize, eyeSize, eyeSize)
        // Right eye
        ctx.fillRect(faceX + gridSize - eyeOffset - eyeSize, faceY + gridSize - eyeOffset - eyeSize, eyeSize, eyeSize)
        // Mouth (angry)
        ctx.fillRect(faceX + gridSize / 2 - eyeSize / 2, faceY + gridSize - eyeOffset, eyeSize, eyeSize)

        // Eyebrows (angry)
        ctx.fillRect(
          faceX + eyeOffset - eyeSize / 2,
          faceY + gridSize - eyeOffset - eyeSize - eyeSize,
          eyeSize * 1.5,
          eyeSize / 2,
        )
        ctx.fillRect(
          faceX + gridSize - eyeOffset - eyeSize - eyeSize,
          faceY + gridSize - eyeOffset - eyeSize - eyeSize,
          eyeSize * 1.5,
          eyeSize / 2,
        )
      }
    }

    // Update direction more frequently for better responsiveness
    const directionInterval = setInterval(() => {
      if (gameRunning) {
        moveTowardFood()
      }
    }, 100) // Reduced from 1000ms to 100ms for more frequent updates

    // Game loop
    const gameLoop = (timestamp: number) => {
      if (!gameRunning) return

      const deltaTime = timestamp - lastTime

      if (deltaTime >= speed) {
        lastTime = timestamp

        // Move snake
        const head = { ...snake[0] }
        head.x += direction.x
        head.y += direction.y

        // Wrap around edges
        if (head.x < 0) head.x = Math.floor(canvas.width / gridSize) - 1
        if (head.y < 0) head.y = Math.floor(canvas.height / gridSize) - 1
        if (head.x >= Math.floor(canvas.width / gridSize)) head.x = 0
        if (head.y >= Math.floor(canvas.height / gridSize)) head.y = 0

        // Check if snake eats food
        if (head.x === food.x && head.y === food.y) {
          score++
          generateFood()
          // Don't remove tail to grow snake
        } else {
          // Remove tail
          snake.pop()
        }

        // Add new head
        snake.unshift(head)

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw food - square instead of circle
        ctx.fillStyle = "rgba(219, 39, 119, 0.6)" // Cherry color with transparency
        ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize)

        // Draw snake body - squares
        ctx.fillStyle = "rgba(219, 39, 119, 0.4)" // Cherry color with more transparency
        for (let i = 1; i < snake.length; i++) {
          ctx.fillRect(snake[i].x * gridSize, snake[i].y * gridSize, gridSize, gridSize)
        }

        // Draw snake head with angry face
        drawAngryFace(snake[0].x, snake[0].y)
      }

      requestAnimationFrame(gameLoop)
    }

    // Start game
    generateFood()
    requestAnimationFrame(gameLoop)

    // Cleanup
    return () => {
      gameRunning = false
      clearInterval(directionInterval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full filter blur-[1px] opacity-40 pointer-events-none z-0"
      style={{ display: "block" }}
    />
  )
}
