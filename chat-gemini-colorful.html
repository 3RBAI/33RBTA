<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>دردشة GPT - Gemini Flash المطورة</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../style.css">
  <style>
    body {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
      font-family: 'Segoe UI', 'Cairo', sans-serif;
      margin: 0;
      direction: rtl;
      color: #2d3748;
      min-height: 100vh;
      animation: gradientShift 10s ease infinite;
    }

    @keyframes gradientShift {
      0%, 100% { background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); }
      25% { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 25%, #667eea 50%, #764ba2 75%, #f093fb 100%); }
      50% { background: linear-gradient(135deg, #f093fb 0%, #f5576c 25%, #4facfe 50%, #00f2fe 75%, #667eea 100%); }
      75% { background: linear-gradient(135deg, #764ba2 0%, #667eea 25%, #4facfe 50%, #f093fb 75%, #f5576c 100%); }
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      padding: 1.5em;
      border-bottom: 3px solid transparent;
      border-image: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57) 1;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }

    header img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      border: 3px solid #ff6b6b;
      box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
    }

    .chat-title {
      font-weight: bold;
      font-size: 1.3em;
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .version {
      font-size: 0.9em;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
      border: 2px solid rgba(255, 255, 255, 0.2);
    }

    main {
      padding: 3em 2em;
      text-align: center;
      min-height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .hello {
      font-size: 3em;
      font-weight: bold;
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 2em;
      text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      animation: textGlow 3s ease-in-out infinite alternate;
    }

    @keyframes textGlow {
      from { filter: drop-shadow(0 0 5px rgba(255, 107, 107, 0.5)); }
      to { filter: drop-shadow(0 0 20px rgba(78, 205, 196, 0.8)); }
    }

    .suggestions {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
      margin-bottom: 3em;
      max-width: 800px;
    }

    .suggestions button {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
      backdrop-filter: blur(10px);
      border: 2px solid transparent;
      border-radius: 25px;
      padding: 12px 24px;
      cursor: pointer;
      font-size: 1em;
      font-weight: 600;
      color: #2d3748;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      position: relative;
      overflow: hidden;
    }

    .suggestions button:nth-child(1) {
      border-image: linear-gradient(45deg, #ff6b6b, #ff8e8e) 1;
    }

    .suggestions button:nth-child(2) {
      border-image: linear-gradient(45deg, #4ecdc4, #7fdddd) 1;
    }

    .suggestions button:nth-child(3) {
      border-image: linear-gradient(45deg, #45b7d1, #78c5e0) 1;
    }

    .suggestions button:nth-child(4) {
      border-image: linear-gradient(45deg, #96ceb4, #b5d6c7) 1;
    }

    .suggestions button:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }

    .suggestions button:nth-child(1):hover {
      background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
      color: white;
    }

    .suggestions button:nth-child(2):hover {
      background: linear-gradient(135deg, #4ecdc4, #7fdddd);
      color: white;
    }

    .suggestions button:nth-child(3):hover {
      background: linear-gradient(135deg, #45b7d1, #78c5e0);
      color: white;
    }

    .suggestions button:nth-child(4):hover {
      background: linear-gradient(135deg, #96ceb4, #b5d6c7);
      color: white;
    }

    .input-area {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2em;
      position: fixed;
      bottom: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border-top: 3px solid transparent;
      border-image: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57) 1;
      box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.1);
    }

    .input-container {
      display: flex;
      align-items: center;
      max-width: 600px;
      width: 100%;
      gap: 15px;
    }

    .input-area input {
      flex: 1;
      padding: 15px 20px;
      border: 3px solid transparent;
      border-radius: 30px;
      outline: none;
      font-size: 1.1em;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      background-image: linear-gradient(white, white), linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
      background-origin: border-box;
      background-clip: padding-box, border-box;
    }

    .input-area input:focus {
      transform: scale(1.02);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    .input-area input::placeholder {
      color: #a0aec0;
      font-weight: 500;
    }

    .send-button {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      border: none;
      padding: 15px 20px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 1.2em;
      width: 55px;
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    }

    .send-button:hover {
      transform: scale(1.1) rotate(15deg);
      background: linear-gradient(135deg, #764ba2, #667eea);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
    }

    .send-button:active {
      transform: scale(0.95);
    }

    /* إضافة أيقونات ملونة */
    .icon-send::before {
      content: "✈️";
      font-size: 1.2em;
    }

    /* تأثيرات إضافية */
    .floating-particles {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    }

    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      animation: float 6s infinite linear;
    }

    @keyframes float {
      0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-10vh) rotate(360deg);
        opacity: 0;
      }
    }

    /* تحسينات للشاشات الصغيرة */
    @media(max-width: 768px) {
      .hello {
        font-size: 2.2em;
      }

      .suggestions {
        flex-direction: column;
        align-items: center;
      }

      .suggestions button {
        width: 90%;
        max-width: 300px;
      }

      .input-container {
        flex-direction: row;
        gap: 10px;
        padding: 0 1em;
      }

      .input-area {
        padding: 1.5em 1em;
      }

      header {
        padding: 1em;
      }

      main {
        padding: 2em 1em;
      }
    }

    /* تأثير النبض للأزرار */
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7); }
      70% { box-shadow: 0 0 0 10px rgba(102, 126, 234, 0); }
      100% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0); }
    }

    .send-button {
      animation: pulse 2s infinite;
    }

    /* تأثير التموج عند النقر */
    .ripple {
      position: relative;
      overflow: hidden;
    }

    .ripple::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      transform: translate(-50%, -50%);
      transition: width 0.6s, height 0.6s;
    }

    .ripple:active::before {
      width: 300px;
      height: 300px;
    }
  </style>
</head>
<body>
  <!-- جزيئات متحركة في الخلفية -->
  <div class="floating-particles" id="particles"></div>

  <header>
    <img src="../images/logo_icon.png" alt="شعار" onerror="this.style.display='none'">
    <div>
      <div class="chat-title">Gemini AI Assistant</div>
      <div class="version">2.0 Flash ⚡</div>
    </div>
  </header>

  <main>
    <div class="hello">مرحباً بك في عالم الذكاء الاصطناعي 🌟</div>

    <div class="suggestions">
      <button class="ripple" onclick="setSuggestion('ابحث في موضوع معين')">
        🔍 ابحث في موضوع معين
      </button>
      <button class="ripple" onclick="setSuggestion('ساعدني في الكتابة')">
        ✍️ ساعدني في الكتابة
      </button>
      <button class="ripple" onclick="setSuggestion('أعطني نصائح للدراسة')">
        📚 أعطني نصائح للدراسة
      </button>
      <button class="ripple" onclick="setSuggestion('اعطني أفكاراً لمشروع')">
        💡 اعطني أفكاراً لمشروع
      </button>
    </div>
  </main>

  <div class="input-area">
    <div class="input-container">
      <input type="text" id="userInput" placeholder="اسأل Gemini أي شيء... 💭">
      <button class="send-button ripple" onclick="sendMessage()">
        <span class="icon-send"></span>
      </button>
    </div>
  </div>

  <script>
    // إنشاء الجزيئات المتحركة
    function createParticles() {
      const particlesContainer = document.getElementById('particles');
      const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particlesContainer.appendChild(particle);
      }
    }

    // تعيين النص المقترح
    function setSuggestion(text) {
      document.getElementById('userInput').value = text;
      document.getElementById('userInput').focus();
    }

    // إرسال الرسالة
    function sendMessage() {
      const input = document.getElementById('userInput');
      const message = input.value.trim();
      
      if (message) {
        // تأثير بصري عند الإرسال
        const sendButton = document.querySelector('.send-button');
        sendButton.style.transform = 'scale(0.9)';
        setTimeout(() => {
          sendButton.style.transform = 'scale(1)';
        }, 150);

        // محاكاة إرسال الرسالة
        showTypingEffect();
        
        // مسح النص
        input.value = '';
        
        // هنا يتم الدمج مع API الحقيقي لاحقًا
        setTimeout(() => {
          showResponse(message);
        }, 2000);
      }
    }

    // تأثير الكتابة
    function showTypingEffect() {
      const main = document.querySelector('main');
      const typingDiv = document.createElement('div');
      typingDiv.innerHTML = `
        <div style="
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 20px;
          border-radius: 20px;
          margin: 20px auto;
          max-width: 500px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border: 2px solid transparent;
          background-image: linear-gradient(white, white), linear-gradient(45deg, #ff6b6b, #4ecdc4);
          background-origin: border-box;
          background-clip: padding-box, border-box;
        ">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: linear-gradient(135deg, #667eea, #764ba2);
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-weight: bold;
            ">AI</div>
            <div>
              <div style="font-weight: bold; color: #2d3748;">Gemini يكتب...</div>
              <div style="display: flex; gap: 4px; margin-top: 5px;">
                <div style="width: 8px; height: 8px; border-radius: 50%; background: #ff6b6b; animation: bounce 1.4s infinite ease-in-out;"></div>
                <div style="width: 8px; height: 8px; border-radius: 50%; background: #4ecdc4; animation: bounce 1.4s infinite ease-in-out; animation-delay: 0.16s;"></div>
                <div style="width: 8px; height: 8px; border-radius: 50%; background: #45b7d1; animation: bounce 1.4s infinite ease-in-out; animation-delay: 0.32s;"></div>
              </div>
            </div>
          </div>
        </div>
      `;
      
      main.appendChild(typingDiv);
      
      // إضافة CSS للتأثير
      const style = document.createElement('style');
      style.textContent = `
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
      `;
      document.head.appendChild(style);
    }

    // عرض الرد
    function showResponse(userMessage) {
      const main = document.querySelector('main');
      
      // إزالة تأثير الكتابة
      const typingDiv = main.querySelector('div:last-child');
      if (typingDiv) typingDiv.remove();
      
      // إضافة الرد
      const responseDiv = document.createElement('div');
      responseDiv.innerHTML = `
        <div style="
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 25px;
          border-radius: 20px;
          margin: 20px auto;
          max-width: 600px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border: 3px solid transparent;
          background-image: linear-gradient(white, white), linear-gradient(45deg, #96ceb4, #feca57);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          animation: slideIn 0.5s ease-out;
        ">
          <div style="display: flex; gap: 15px; margin-bottom: 15px;">
            <div style="
              width: 45px;
              height: 45px;
              border-radius: 50%;
              background: linear-gradient(135deg, #96ceb4, #feca57);
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-weight: bold;
              font-size: 1.1em;
            ">🤖</div>
            <div style="flex: 1;">
              <div style="font-weight: bold; color: #2d3748; margin-bottom: 8px;">Gemini AI</div>
              <div style="color: #4a5568; line-height: 1.6;">
                شكراً لك على سؤالك: "<em style="color: #667eea;">${userMessage}</em>"<br><br>
                أنا هنا لمساعدتك! يمكنني مساعدتك في مجموعة واسعة من المواضيع مثل:
                <ul style="margin: 10px 0; padding-right: 20px;">
                  <li>🎓 التعليم والدراسة</li>
                  <li>💻 البرمجة والتكنولوجيا</li>
                  <li>🎨 الإبداع والكتابة</li>
                  <li>🔬 البحث والتحليل</li>
                  <li>🌟 وأي شيء آخر تحتاج إليه!</li>
                </ul>
                كيف يمكنني مساعدتك بشكل أكثر تحديداً؟
              </div>
            </div>
          </div>
        </div>
      `;
      
      main.appendChild(responseDiv);
      
      // إضافة CSS للتأثير
      const style = document.createElement('style');
      style.textContent = `
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `;
      document.head.appendChild(style);
    }

    // التعامل مع مفتاح Enter
    document.getElementById('userInput').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });

    // تشغيل الجزيئات عند تحميل الصفحة
    document.addEventListener('DOMContentLoaded', function() {
      createParticles();
      
      // تأثير ترحيبي
      setTimeout(() => {
        const hello = document.querySelector('.hello');
        hello.style.animation = 'textGlow 3s ease-in-out infinite alternate, bounce 2s ease-in-out';
      }, 500);
    });

    // تأثير النقر على الأزرار
    document.querySelectorAll('.ripple').forEach(button => {
      button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });

    // إضافة CSS لتأثير الريبل
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
      .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
      }
      
      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
      
      @keyframes bounce {
        0%, 20%, 60%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        80% { transform: translateY(-5px); }
      }
    `;
    document.head.appendChild(rippleStyle);
  </script>
</body>
</html>
