import subprocess
import sys
import os

def run_command(command):
    """Run a shell command and print the output"""
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        print(f"✅ {command}")
        if result.stdout:
            print(result.stdout)
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Error running: {command}")
        print(e.stderr)
        return False

def setup_environment():
    """Set up the environment for custom LLM training"""
    print("🚀 Setting up Custom LLM Environment...")
    
    # Create project directory structure
    os.makedirs("data", exist_ok=True)
    os.makedirs("models", exist_ok=True)
    os.makedirs("checkpoints", exist_ok=True)
    
    # Install required packages
    packages = [
        "torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118",
        "transformers datasets accelerate bitsandbytes",
        "trl",
        "fastapi[all]",
        "uvicorn"
    ]
    
    for package in packages:
        print(f"Installing {package}...")
        if not run_command(f"pip install {package}"):
            print(f"Failed to install {package}")
            return False
    
    print("✅ Environment setup complete!")
    return True

if __name__ == "__main__":
    setup_environment()
