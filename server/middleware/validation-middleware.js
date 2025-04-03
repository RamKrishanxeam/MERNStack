// Middleware एक फ़ंक्शन होता है जो Request (अनुरोध) और Response (प्रतिक्रिया) के बीच में आता है।
// यह इनकमिंग HTTP रिक्वेस्ट को प्रोसेस करने, मॉडिफाई करने, और नेक्स्ट फ़ंक्शन को कॉल करने के लिए उपयोग किया जाता है।
// schema.parseAsync() Zod लाइब्रेरी का एक फ़ंक्शन है, जो asynchronous validation करने के लिए उपयोग किया जाता है।
//  अगर आपका डेटा किसी async operation (जैसे, Database query या API call) पर निर्भर करता है, तो parseAsync() उपयोगी होता है।
// Zod एक TypeScript-first डेटा वैलिडेशन लाइब्रेरी है, जो schema-based validation प्रदान करती है। यह डेटा की टाइप और संरचना की जाँच करता है।
// next() Express.js में एक फ़ंक्शन है, जिसका उपयोग middleware functions को नियंत्रित करने और
//  अगले middleware या route handler को कॉल करने के लिए किया जाता है।

const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const errorMessages = err.errors.map((err) => err.message);
    res.status(400).json({ message: errorMessages });
  }
};

module.exports = validate;
