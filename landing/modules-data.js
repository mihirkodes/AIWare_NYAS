// Made by Peter Shawkat
// haibi297, Pedro on Github
// Module content data for AIware — modules 1-10 complete, 11-15 coming soon

const MODULES_DATA = {

  1: {
    id: 1,
    tier: 'beg',
    title: 'What Is AI Really?',
    intro: 'When most people hear the term "AI", they picture a robot with glowing eyes trying to take over the world. Movies have done a really good job of making AI seem way scarier and more mysterious than it actually is. The truth is that AI is simply software, along with some computer code. It is not alive, it does not have feelings, and it is NOT plotting anything against the world. What it can do, however, is learn from examples and get surprisingly good at specific tasks through repetition and training.',
    objectives: [
      'Understand what AI actually is and clear up common misconceptions',
      'Explain the difference between AI and regular software',
      'Describe how AI finds patterns instead of truly "thinking"',
    ],
    concepts: [
      {
        title: 'AI is software, not a robot',
        content: 'AI stands for Artificial Intelligence, and the word "artificial" just means man-made. At its core, AI is a combination of different computer programs that can do things that used to require human critical thinking — like facial recognition, translating languages, or predicting the weather. There is no tiny brain inside your phone making those calls; it is simply math, computer code, patterns, and a whole lot of practice data working together.',
        example: 'When you start typing a text and your phone suggests the next word, that is AI in action. It studied millions of text conversations and learned which words tend to follow other words through pattern recognition. Next time you type "How are" and your phone suggests "you?", that is a pattern machine doing its thing, not magic.',
      },
      {
        title: 'Differences between AI and regular software',
        content: 'Old-school software is basically a giant rulebook a programmer wrote: "If the user types X, do Y." It is powerful, but it can only do exactly what it was told. Unlike traditional programs that follow fixed rules, AI systems can analyze data, find patterns, and improve over time without being explicitly reprogrammed. Think of regular software as a recipe book where every step is written out. AI is more like a chef who has eaten so many dishes they can just invent new ones on the fly.',
        example: 'Old spam filters worked on rules: if an email contains "free money," block it. Modern spam filters use AI — they learn to identify spam by analyzing message patterns and can catch new spam that no programmer ever specifically wrote a rule for.',
      },
      {
        title: 'AI does not "think" — it finds patterns',
        content: 'AI does NOT understand things the way you do. It does not think or learn like humans. Instead, it processes inputs and produces outputs based on patterns it finds in data. When an AI reads your essay, it is not really understanding your ideas — it is detecting patterns in how words are arranged. This is why AI can seem brilliant one second and weirdly wrong the next: it is matching patterns instead of reasoning.',
        example: 'If you ask an AI "What is 3+3?", it does not calculate it the way humans do. It has seen "3+3 = 6" so many times that it just knows the pattern. Ask it a weird math problem it has not encountered and it might confidently give you the wrong answer — because it guesses based on what looks right, not by actually working it out.',
      },
    ],
    activity: {
      title: '"Is This AI?" Sorting Game',
      desc: 'You will receive a deck of cards showing different technologies. Your job is to sort each card into two piles: uses AI or does not use AI. The list includes things like a basic calculator, Spotify recommendations, a light-switch timer, Face ID, Google Maps traffic warnings, a vending machine, TikTok\'s For You page, and more. After the reveal, pick a couple that surprised you and explain to a partner why it is or isn\'t AI. What made it tricky? Bonus round: name one technology from your own life that is not already on the list.',
    },
  },

  2: {
    id: 2,
    tier: 'beg',
    title: 'How AI Learns from Data',
    intro: 'If AI figures out its own rules from examples instead of being programmed step-by-step, you might be wondering how that actually works. The short answer is data, data, and more data. AI learns kind of like how you learned to recognize a dog. Nobody handed you a rulebook that said "four legs + fur + tail = dog." You just saw enough dogs that your brain eventually got it. AI does something similar, except instead of years of childhood experience, it gets millions of examples fed to it at once.',
    objectives: [
      'Explain how AI is trained using large datasets',
      'Understand what "biased data" means and why it matters',
      'Describe why AI can sound confident even when it is wrong',
    ],
    concepts: [
      {
        title: 'Training AI with data',
        content: 'Before an AI can do anything useful, it has to be trained. Training means showing the AI thousands, millions, or even billions of examples and letting it adjust itself based on whether it gets the right or wrong answer. It is similar to practicing baseball pitches: you miss the zone, you adjust, you try again. The AI "misses" when it gets the wrong answer, and it tweaks its internal settings until it stops missing as much. This process can take days or weeks and requires enormous computing power.',
        example: 'To teach an AI to recognize faces in photos, engineers fed it millions of labeled images. At first, the AI guessed randomly. After millions of attempts and corrections, it got good enough to identify a face in a blurry photo, in a dark room, half-hidden behind a couch — all from practice.',
      },
      {
        title: 'Implications of biased data',
        content: 'More data is not always better if the data is bad. If you train AI on biased, wrong, or unrepresentative examples, it will learn those bad patterns and repeat them confidently. Programmers call this "garbage in, garbage out." The AI is only as fair and accurate as what you taught it with.',
        example: 'Amazon built an AI to screen job applications, but it was trained on resumes submitted over ten years — mostly from men. As a result, resumes with the word "women\'s" (as in "women\'s volleyball team captain") were downgraded. The AI had taught itself that male candidates were preferable, reflecting the male-dominated data it was trained on. Amazon scrapped the tool entirely.',
      },
      {
        title: 'AI finds patterns, but does not truly understand them',
        content: 'AI does not understand what it is processing the way you understand things, although it is incredibly powerful at finding patterns. AI hallucinates when the information required is missing or outside its training data — the model confidently fills in gaps with plausible-sounding guesses. This is why AI can sound totally convincing and still be completely wrong. It does not know the difference between a correct and incorrect answer. It only knows what sounds like the right kind of answer.',
        example: 'Ask an AI chatbot about a real person who is not very famous, and it might invent a completely made-up biography — wrong lifestyle, wrong hometown, wrong career — and deliver it with the same confident tone as when it gets things right. It is not bluffing on purpose. It just fills in blanks with whatever pattern fits.',
      },
    ],
    activity: {
      title: 'Paper AI Experiment',
      desc: 'One student is the AI, the other is the trainer. The trainer thinks of a secret rule (examples: "all words with double letters", "things you\'d find at a beach", "things that are red"). The trainer gives examples one at a time, saying only whether each thing fits the rule or not — no hints or explanations. The AI student has to guess the rule after seeing enough examples. After figuring it out (or giving up), discuss: how many examples did it take? What made some rules harder to spot? How would it feel if some of the trainer\'s examples were wrong? Then look back at the training data and identify any possible biases.',
    },
  },

  3: {
    id: 3,
    tier: 'beg',
    title: 'Generative vs. Predictive AI',
    intro: 'Not all AI is the same. Some AI tools seem to create stuff — writing an essay or drawing a picture — while others seem to predict things, like guessing the next word in your sentence or flagging a weird charge on your parents\' credit card. Those are actually two pretty different types of AI, and knowing the difference helps you understand what AI can and cannot do. Think of it like the difference between an artist and a weather forecaster. Both are skilled, but they are doing completely different jobs.',
    objectives: [
      'Define predictive AI and give real-world examples',
      'Define generative AI and explain how it creates new content',
      'Explain why some AI tools can be both generative and predictive',
    ],
    concepts: [
      {
        title: 'Predictive AI — the forecaster',
        content: 'Predictive AI forecasts future events and outcomes based on patterns in data. It looks at what has happened before and makes its best guess about what comes next. It is not creating anything new — it is analyzing past information to tell you something about the future. Predictive AI has been around for a long time, quietly working behind the scenes in things you use every day.',
        example: 'When your bank sends an alert saying "unusual activity on your card," that is predictive AI. It studied your family\'s normal spending patterns and noticed something that did not fit. It is not creating anything — it is saying "this does not match the observed pattern."',
      },
      {
        title: 'Generative AI — the creator',
        content: 'Generative AI produces new content — text, images, code, audio — based on patterns it learned during training. This is the kind of AI behind ChatGPT, Google Gemini, and image generators. It does not just predict what comes next — it actually generates something new that did not exist before. Think of generative AI as the creative type that uses deep learning and large language models (LLMs) to generate new content based on the data it was trained on.',
        example: 'When you ask an AI chatbot to write you a poem about your dog, it is not pulling a pre-written poem from somewhere — it is making a brand-new one from scratch by predicting what a good dog poem would look like based on every poem it has ever read.',
      },
      {
        title: 'Can AI be both generative and predictive?',
        content: 'The line between generative and predictive AI is not always obvious, because generative AI also uses predictive processes under the hood. When ChatGPT writes you a sentence, it is technically predicting the most likely next word, over and over. But the goal is to create new content, so we call it generative. The difference is really about what the AI is trying to accomplish.',
        example: 'Your music app\'s "Recommended for You" playlist is predictive AI — it studied what you listened to and predicted what you would like next. But if you asked an AI to write you a new song in your favorite genre, that would be generative AI creating something new. Same general idea of learning patterns, but a very different end result.',
      },
    ],
    activity: {
      title: 'Generative or Predictive — You Be the Judge',
      desc: 'Your teacher will show the class 8–10 short descriptions of AI tools in action. For each one, your group decides: is this generative AI, predictive AI, or could it be both? Examples to sort include: "Netflix suggests a show you might like," "An app writes a birthday message for you," "A hospital AI predicts which patients might get sicker," "An app turns your photo into a painting," "Your phone finishes the word you\'re typing." After sorting, each group shares their most debated card and explains why it was tricky. Some can blend into both — and that is the point.',
    },
  },

  4: {
    id: 4,
    tier: 'beg',
    title: 'Spotting AI-Generated Content',
    intro: 'A few years ago, you could pretty easily tell when something was fake online — bad photoshops, blurry images, weird fonts. Now, AI can generate photos, videos, and written articles that look completely real at first glance. This is one of the most important digital skills you can have right now: learning to slow down and actually look before you believe or share something. The good news is that AI still makes some pretty obvious mistakes, and once you know what to look for, you will start seeing them everywhere.',
    objectives: [
      'Identify visual signs of AI-generated images',
      'Recognize the distinctive tone and structure of AI-written text',
      'Use reverse image search and other tools to verify content',
    ],
    concepts: [
      {
        title: 'AI images have inconsistencies',
        content: 'AI image generators have gotten incredibly good, but they still struggle with specific details — especially hands, text, and backgrounds. Look for extra fingers or too many teeth, unnatural blending of skin tones, and overly smooth textures. Backgrounds in AI images often have weird, dreamlike distortions — buildings that do not make architectural sense, signs with scrambled letters, or lighting that comes from no logical direction.',
        example: 'In 2023, a photo spread online claiming to show a dramatic news event. Careful viewers noticed that a person in the background had seven fingers and a sign behind them had letters that spelled nothing. It was AI-generated. Once people knew what to look for, it was obvious — but most people who shared it did not look that closely.',
      },
      {
        title: 'AI-written text has a distinctive tone',
        content: 'AI writing tends to have a particular flavor: super polished, overly balanced, and oddly generic. These patterns emerge because AI models predict the most statistically probable words rather than writing with intentionality like humans do. Real human writing has personality, imperfection, and specific details from lived experience. AI writing often covers a topic from every angle without ever actually saying anything bold or personal.',
        example: 'If you read a product review that praises something in very smooth, flowery language but does not include any specific details about that thing, that vagueness is a clue. Real reviewers write from experience. AI fills in the most statistically "review-sounding" words.',
      },
      {
        title: 'Your brain is the best verification tool',
        content: 'There are AI detection tools out there, but they are notoriously unreliable — the best ones correctly identify AI-generated text about 80% of the time, which is not good enough for important situations. The most reliable approach is critical thinking combined with quick fact-checking. Three ways to verify before sharing: reverse image search, asking questions, and paying attention to context clues.',
        example: 'A photo claims to show a celebrity doing something shocking. Before reacting or sharing: right-click the image and do a reverse image search on Google or TinEye. This traces where the image actually came from. If it only shows up on low-credibility sites and nowhere on reputable news sources, treat it with major skepticism.',
      },
    ],
    activity: {
      title: 'The AI Detective Challenge',
      desc: 'Your teacher will display a set of 5–6 pieces of content: a mix of AI-generated images, AI-written paragraphs, and real human-created ones. Working in pairs, you have 10 minutes to analyze each one and mark it as AI, human, or "not sure." For each one, write down the biggest clue that made you think it was AI or human. After the reveal, discuss which ones fooled the most people. What made the real ones feel real? Were there any AI ones that seemed totally convincing?',
    },
  },

  5: {
    id: 5,
    tier: 'beg',
    title: 'AI Hallucinations & Fact-Checking',
    intro: 'Imagine asking a really confident friend for help with homework. They give you a detailed, well-organized answer that sounds correct. Then you get the assignment back and half the facts they gave you were completely made up. That is basically what AI hallucinations are. The scary part is not just that AI gets things wrong — it is that AI delivers wrong information with the exact same confident tone as correct information, without warning or hesitation. Knowing how to fact-check AI is now one of the most valuable skills you can have.',
    objectives: [
      'Define what an AI hallucination is and why it happens',
      'Explain why AI sounds confident even when it is wrong',
      'Apply the SIFT method to fact-check AI outputs and online claims',
    ],
    concepts: [
      {
        title: 'What is an AI hallucination?',
        content: 'In the field of artificial intelligence, a hallucination is a response generated by AI that contains false or misleading information presented as fact. It is not the AI lying — it does not know the difference between true and false. AI hallucinates because language models do not actually know facts — they predict the next thing based on patterns learned from massive amounts of data. If the training data is sparse or inconsistent, the model fills in the gaps with something plausible but untrue.',
        example: 'In the legal case of Mata v. Avianca, a New York attorney used ChatGPT to conduct legal research. The AI cited legal cases and quotes that were entirely nonexistent — it had made them up — and even claimed they were available in major legal databases. The lawyer faced serious consequences for submitting fake sources to a federal court.',
      },
      {
        title: 'Why AI sounds confident even when it\'s wrong',
        content: 'Generative AI is built to sound plausible, which is not necessarily the same as being right. Under the hood, a generative model is essentially an extremely powerful autocomplete — its job is to predict the next likely thing, not to stick to the facts. When it does not know something, it does not say "I don\'t know." It says whatever sounds most like the right answer would sound. This is called confabulation — filling in gaps with convincing-sounding fiction.',
        example: 'Ask an AI chatbot about a historical event from a specific small town in the 1800s, and it will often invent specific-sounding dates, names, and details — because that is what a confident answer about a historical event looks like. The confident tone is a pattern it learned from reading thousands of history books, not proof that the facts are right.',
      },
      {
        title: 'The SIFT method',
        content: 'Fact-checking does not have to be complicated. Professional journalists and fact-checkers use a method called SIFT, developed by digital literacy researcher Mike Caulfield. SIFT stands for: Stop — do not just react, pause before believing or sharing. Investigate the source — who created this and do they have a reason to mislead you? Find better coverage — open a new tab and see what trusted sources say. Trace claims — follow quotes and statistics back to where they originally came from.',
        example: 'An AI tells you that a certain food causes cancer, citing a specific study. SIFT in action: Stop (do not immediately panic or share). Investigate (was there actually a study?). Find better coverage (what do medical news sites say?). Trace the claim (can you find the actual study, and does it say what the AI claims?). Most of the time, a 60-second SIFT is enough to figure out whether something is legit.',
      },
    ],
    activity: {
      title: 'SIFT in Action',
      desc: 'Your teacher will give each group an AI-generated "fact" — some will be real, some will be hallucinated. Your job is to run it through the SIFT method in real time using your devices. Steps: Read the claim. Stop — what is your gut reaction? Do a quick search to investigate. Find at least two trustworthy sources that either confirm or deny it. Trace it: can you find where the claim originally came from? Each group reports back: was the fact real or hallucinated? How long did it take to find out? Which step in SIFT was most useful? The class will vote on which hallucinated fact was the most convincingly written.',
    },
  },

  6: {
    id: 6,
    tier: 'int',
    title: 'AI Ethics & Privacy',
    intro: 'Imagine you are using a free app on your phone. You have not paid a single cent for it. But here is the question nobody ever thinks to ask: why exactly is it free? The answer, most of the time, is you. Your clicks, your searches, your location, and your habits are all data that gets collected, analyzed, and sold. Now layer AI on top of that, and things get way more interesting and complicated. AI can process that data at a scale no human ever could, drawing conclusions about you that you never intended to share.',
    objectives: [
      'Explain how personal data is collected and monetized by apps',
      'Describe how AI bias causes real harm to real people',
      'Discuss who is responsible when an AI system makes a harmful decision',
    ],
    concepts: [
      {
        title: 'Your data is the product',
        content: 'Every time you use a free app, search the web, or scroll through social media, you are generating data. AI systems are built to analyze that data — learning your patterns, your interests, your schedule, and even your emotional state. When you click "Agree" on a terms-of-service page nobody reads, your data now belongs to a company. The more data AI has about you, the better it can predict your behavior and sell that prediction to advertisers or other companies.',
        example: 'Instagram always seems to know you want to see ads for the exact sneakers you mentioned to a friend the day before. These algorithms are not reading your mind — they are reading your behavior. Every post you like, every account you stalk, every time you slow your scroll is data that AI is analyzing to build a profile of you that is surprisingly accurate.',
      },
      {
        title: 'AI bias can cause real harm',
        content: 'When AI makes biased decisions, real people get hurt in real life. Facial recognition is one of the clearest examples. Microsoft\'s FaceDetect had an error rate of 0% for light-skinned male suspects but a 20.8% error rate for dark-skinned female suspects. That is not a glitch — it is a system that was primarily trained on faces that look a certain way, and it fails dramatically on faces it has not seen enough of. When this technology is used by law enforcement, those mistakes can mean someone gets wrongly accused.',
        example: 'In 2020, a Black man named Robert Williams was arrested in Detroit after a facial recognition system incorrectly matched his face to a shoplifting suspect. He was held for 30 hours before investigators realized the AI had gotten it completely wrong. It was the first known case of a wrongful arrest in the US caused directly by facial recognition error.',
      },
      {
        title: 'Who is responsible when AI gets it wrong?',
        content: 'This is one of the trickiest questions in all of AI ethics, and nobody has a clean answer yet. If an AI makes a wrong decision — misidentifies someone, denies a loan, or filters out a job applicant — who is responsible? The programmer who wrote the code, the company that deployed it, or the person who used it without checking? AI decisions are often invisible to the people they affect most.',
        example: 'When Amazon\'s hiring AI discriminated against women, the women who were filtered out never knew it happened. Nobody told them an algorithm had reviewed their application and downgraded them before a human ever saw their resume. The troubling part is that AI decisions are often invisible to the people they affect most.',
      },
    ],
    activity: {
      title: 'Ethics Tribunal',
      desc: 'Your class will put a fictional AI system on trial. Each student is assigned a role: AI company CEO (defending the product), privacy lawyer (arguing the AI violated rights), affected citizen (someone harmed by the AI), journalist (reporting the story), and government regulator (deciding what the law should be). Scenario: a school district deployed an AI that monitors students\' social media and flags anyone it thinks is a "risk" based on their posts. The AI has falsely flagged three students from minority groups. Each role gets 2 minutes to make their case. The class votes: should this AI be allowed to continue, be banned, modified, or regulated? After the verdict, discuss what rule you would create to prevent this from happening again.',
    },
  },

  7: {
    id: 7,
    tier: 'int',
    title: 'AI & the Environment',
    intro: 'When you think about AI harming the environment, you probably do not picture yourself typing a question into a chatbot. But every single time you use an AI tool, somewhere in the world, a massive building full of computers fires up to process your request. Those buildings need enormous amounts of electricity to run and huge quantities of cold water to stop themselves from overheating. At a scale of hundreds of millions of users asking billions of questions, the environmental numbers start looking very, very large.',
    objectives: [
      'Explain the electricity demands of AI data centers',
      'Describe how AI training and inference consumes water',
      'Evaluate potential solutions to reduce AI\'s environmental footprint',
    ],
    concepts: [
      {
        title: 'The hidden electricity bill',
        content: 'AI does not live in the clouds like floating magic. It lives in data centers — giant warehouses packed wall-to-wall with specialized computer chips running 24/7. A single AI-focused data center can consume as much electricity as 100,000 households. And there are not just a handful of these buildings; there are thousands, and more are being built every month. That electricity has to come from somewhere, and a lot of it still comes from burning fossil fuels.',
        example: 'Researchers estimate that AI systems alone could produce between 32.6 and 79.7 million tons of CO₂ emissions in 2025. To put that in perspective, that is comparable to the emissions of entire major cities. The next time someone says AI is just software and therefore has no environmental impact, you will know the real picture.',
      },
      {
        title: 'The water you never thought about',
        content: 'Computers generate heat — lots of it. To stop data centers from melting themselves, they need massive cooling systems that use enormous amounts of water. By 2030, at the current rate of AI growth, data centers could drain between 731 million to 1.125 billion cubic meters of water per year — equal to the annual household water usage of 6 to 10 million Americans. This is especially alarming because many data centers are being built in water-scarce regions like Nevada and Arizona.',
        example: 'Microsoft reported that its global water consumption increased sharply in recent years, largely due to AI development. Training a single large AI model can use as much water as filling hundreds of swimming pools. Every search, every chatbot conversation, and every AI-generated image is a tiny sip from somewhere\'s water supply — and at billions of sips a day, it adds up fast.',
      },
      {
        title: 'Not all AI usage is equal — and there are solutions',
        content: 'Not all AI has the same footprint, and the industry is actively working on solutions. Deploying energy and water-efficient technologies could lower water use by around 32%. Companies are also investing in running data centers on renewable energy. Researchers are working on smaller, faster, more efficient models that can even run directly on your phone without needing a data center at all.',
        example: 'Google has committed to running all of its data centers on carbon-free energy 24/7 by 2030. Meanwhile, smaller, more efficient models are being developed that run directly on your device — meaning the computation happens on your phone, using your battery, with zero data center water or electricity required.',
      },
    ],
    activity: {
      title: 'AI Carbon Calculator',
      desc: 'As a class, estimate the carbon footprint of your collective AI use over one week. Step 1: Each student writes down approximately how many times they used any AI tool in the past week. Step 2: Using a provided fact sheet, calculate the approximate carbon equivalent of one AI query (roughly 0.002–0.01 kWh, about 4–10x more than a Google search). Add up the class total. Step 3: Compare your class\'s AI energy use to everyday things — driving a car a mile, leaving a lightbulb on for an hour, charging a phone. Step 4: Debate — does knowing the environmental cost of AI change how you\'d use it? Are there cases where AI saves more energy than it uses?',
    },
  },

  8: {
    id: 8,
    tier: 'int',
    title: 'Prompt Engineering',
    intro: 'Imagine you have a really knowledgeable friend who has read almost every book ever written. They can help you with almost any topic — writing, history, science, advice, code, or recipes. But here is the catch: the quality of their help depends almost entirely on how well you explain what you need. Ask them a vague question, and you get a vague answer. Ask them a detailed, specific, well-framed question, and the answer will blow you away. That is exactly what working with AI is like. Prompt engineering is the skill of learning how to talk to AI well.',
    objectives: [
      'Explain why specificity and context dramatically improve AI outputs',
      'Use few-shot prompting by providing examples before a request',
      'Apply chain-of-thought prompting to get better reasoning from AI',
    ],
    concepts: [
      {
        title: 'Specificity and context are everything',
        content: 'The single biggest upgrade you can make to your AI interactions is adding more context. A vague prompt gives the AI almost no information to work with, so it fills in the blanks with the most generic response it can produce. A specific prompt gives it guardrails. Think of it like ordering food: "give me something good" will get you something random, but "I want spicy noodles, vegetarian, not too salty, served quickly" will get you exactly what you want.',
        example: 'Compare these two prompts: "Help me write a speech" versus "Write a 2-minute speech for a middle school student council election. My name is Jamie, I want to focus on making the cafeteria better, and I want to sound friendly and confident, not stiff." The second prompt will get a completely different and way better result.',
      },
      {
        title: 'Give examples, not just instructions',
        content: 'One of the most powerful prompting techniques is called few-shot prompting — giving the AI one or two examples of what you want before asking it to do it. Instead of just saying "classify these reviews as positive or negative," you show the AI one positive example and one negative example first. Suddenly the AI has a much clearer picture of your exact definition, which might be different from what it assumed.',
        example: 'If you want an AI to write jokes in a specific style, saying "write a joke" gives you something generic. But if you say "Here is an example of the style I want: [your joke]. Now write five more like that," the AI has something concrete to match. This is the same reason recipes give example photos — it is way easier to match a picture than to visualize what something means.',
      },
      {
        title: 'Chain-of-thought: make AI think out loud',
        content: 'Chain-of-thought prompting is a technique that enhances the reasoning abilities of AI by breaking down complex tasks into simpler sub-steps, instructing the model to solve a problem step-by-step. This forces the AI to actually reason through the problem rather than just pattern-match to an answer, and it lets you catch errors in its logic before you act on the conclusion.',
        example: 'If you ask an AI "Should I take the bus or the bike to school?" it might just guess. But if you ask "I need to be at school by 8 AM, the bus takes 15 minutes and comes at 7:40, the bike takes 20 minutes, and it is raining. Which is better and why?" — now the AI has a reasoning chain to follow, and you can check if it made a mistake along the way.',
      },
    ],
    activity: {
      title: 'The Prompt Upgrade Challenge',
      desc: 'Students work in pairs. Each pair draws a task card with a scenario, a weak starting prompt, and two challenge boxes: one asking you to add context and a role, one asking you to add a few-shot example or step-by-step instruction. Round 1: submit the weak prompt and record the output. Round 2: work through both challenge boxes to build the upgraded prompt, submit it, and record the new output. Each pair reads both outputs aloud. The class votes on the most dramatic improvement. Discuss which challenge box made the bigger difference — context or examples — and whether the answer changes depending on the task.',
    },
  },

  9: {
    id: 9,
    tier: 'int',
    title: 'How Neural Networks Work',
    intro: 'Picture a relay race, but a weird one. The first runner does not only pass a baton — they also make a decision about what color the baton is before handing it off. The next runner looks at the color, makes another decision, changes it slightly, and passes it on. This keeps happening through a whole team of runners, with each one refining the baton a little more, until the last runner holds it up and announces: "It\'s a dog." In a nutshell, that is how a neural network works. Each layer of neurons makes a small decision, and those small decisions chain together into one final answer.',
    objectives: [
      'Describe the three types of layers in a neural network',
      'Explain how weights determine how much each input matters',
      'Understand how backpropagation adjusts weights during training',
    ],
    concepts: [
      {
        title: 'Layers — input, hidden, and output',
        content: 'A neural network is organized into layers. The input layer takes in raw information — like pixels of an image, words of a sentence, or numbers in a spreadsheet. The hidden layers are where all the interesting work happens: each neuron does a tiny math operation and passes its result to the next layer. The output layer takes everything that has been processed and delivers a final answer. The more hidden layers a network has, the more complex patterns it can recognize — which is why the biggest modern AI models have dozens or hundreds of layers.',
        example: 'When your phone uses Face ID, a neural network works through layers. The input layer takes in the pixels of your face. Early hidden layers detect edges and brightness. Middle layers recognize higher-level features like "there is a nose here." Later layers combine everything into "this is the specific arrangement of features that belongs to exactly this person." The output layer says: Unlock, or Don\'t unlock.',
      },
      {
        title: 'Weights — how neurons vote',
        content: 'Each connection between neurons has a number called a weight. Think of it like a volume knob: a high weight means this input matters a lot, while a low weight means this input barely matters. When a neuron receives signals, it multiplies each by its associated weight, adds the results together, and if the sum is above a certain threshold, it fires and passes a signal forward. Training a neural network is basically the process of adjusting millions of these weights until the network reliably gets the right answer.',
        example: 'Imagine a spam detector neural network learning that emails containing "CONGRATULATIONS" in all caps are usually spam. Over time, the weight on that feature gets turned up high. But the network also learns that "congratulations" in normal casing in an email from a known contact is fine, so that weight stays low. Different capitalization = different weight = different outcome.',
      },
      {
        title: 'Backpropagation — learning from mistakes',
        content: 'Here is how neural networks actually learn: they make a prediction, check how wrong they were, and then adjust every weight in the network slightly to be less wrong next time. This process is called backpropagation — the error travels backwards through the network, nudging each weight in the right direction. During training, all weights start at random values. Training data is fed through the layers, and the weights are continually adjusted until examples with the same labels consistently yield similar outputs.',
        example: 'Think about learning to shoot free throws. You take a shot, it goes too far left. Your brain adjusts: next time, aim slightly right. You shoot again, it is too short. You put more power in. Over hundreds of attempts, your muscle memory gets fine-tuned. Neural networks do the exact same thing — just with math instead of muscles, and millions of shots instead of hundreds.',
      },
    ],
    activity: {
      title: 'Be the Neural Network',
      desc: 'Students form a human neural network. Three rows: Row 1 = input layer (3 students), Row 2 = hidden layer (4 students), Row 3 = output layer (1 student). Each connection between students gets a weight card: 1 (pass the signal), 0 (block it), or 0.5 (pass it weakly). The task: decide if an animal is a cat or a dog. The teacher inputs features to Row 1. Each Row 1 student passes a signal based on their weight card. Row 2 receives signals, adds them up, and passes forward based on their threshold. Row 3 announces the answer. Run the activity 3 times with different animals, changing one weight card between rounds. Observe how changing a single weight changes the outcome.',
    },
  },

  10: {
    id: 10,
    tier: 'int',
    title: 'Precision, Recall & Accuracy',
    intro: 'Imagine a very enthusiastic security guard at a concert venue. Guard #1 is so strict they stop everyone, including people with legitimate tickets, to triple-check everything. Almost no one sneaks in, but plenty of valid ticket-holders miss the show. Guard #2 is so laid-back they wave everyone through. Lots of ticket-less people sneak in, but the process is smooth. Neither guard is doing a good job — just in opposite ways. This tension between being too strict and too lenient is exactly what precision, recall, and accuracy measure in AI systems.',
    objectives: [
      'Explain why accuracy alone can be a misleading metric',
      'Define precision and recall and describe the trade-off between them',
      'Determine which metric matters most for a given real-world application',
    ],
    concepts: [
      {
        title: 'Accuracy — the most misunderstood metric',
        content: 'Accuracy sounds like the ultimate measure of how good an AI is: out of all predictions made, what percentage were correct? But accuracy can be wildly misleading when detecting something rare. Imagine an AI designed to detect a disease that only 1% of people have. If the AI just says "healthy" for every single person it sees, it will be 99% accurate — but it is completely useless because it never catches the actual disease.',
        example: 'In 2020, researchers discovered that an AI being used to detect COVID-19 in chest X-rays had high overall accuracy, but when examined more closely, it was mostly getting the "healthy" cases right and missing a lot of actual COVID cases. The accuracy number looked fine. The performance for the actual job it was hired to do was terrible.',
      },
      {
        title: 'Precision vs. Recall — a genuine trade-off',
        content: 'Precision asks: "Of all the things you flagged as positive, how many actually were?" Recall asks: "Of all the things that actually were positive, how many did you catch?" They often have a tug-of-war relationship — as precision increases, recall typically decreases, and vice versa. Precision is a measure of quality; recall is a measure of quantity.',
        example: 'A high-precision guard lets very few people through incorrectly, but might also wrongly turn away real ticket-holders (low recall). A high-recall guard catches almost everyone without a ticket, but creates a ton of false alarms by stopping legitimate guests (low precision). You can tune a system to be more precise or more thorough, but making it better at one tends to make it worse at the other.',
      },
      {
        title: 'When each metric matters',
        content: 'Different real-world problems demand completely different priorities. In medical diagnosis, a false positive can lead to unnecessary treatment, so precision may be more valuable in some contexts. In fraud detection, missing a fraudulent transaction causes significant financial loss, so recall matters more. If your AI is catching cancer, you want high recall — it is better to scare someone who does not have it than to miss someone who does. If your AI is convicting people of crimes, you want high precision.',
        example: 'Airport security systems face this trade-off every day. A scanner set for high recall flags almost every bag as suspicious (long lines, lots of false alarms). Set for high precision, it only flags bags it is very confident about, but might miss a few real threats. The right setting depends on the consequences of each type of mistake — and that is ultimately a human judgment call.',
      },
    ],
    activity: {
      title: 'Build a Confusion Matrix',
      desc: 'Each student gets a worksheet with a scenario and 20 sample predictions from an AI system — what the AI predicted and what the real answer actually was. Scenario: an AI reviews photos from a school garden to predict whether a plant is healthy or diseased. Sort each prediction into: True Positive, True Negative, False Positive, or False Negative. Fill in a 2×2 confusion matrix. Then calculate by hand: Accuracy = (TP + TN) ÷ 20, Precision = TP ÷ (TP + FP), Recall = TP ÷ (TP + FN). Reflection: which error is worse for this scenario? If this AI were used on a farm to decide which plants get expensive treatment, how would your answer change?',
    },
  },

};