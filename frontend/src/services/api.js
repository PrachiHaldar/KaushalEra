/**
 * KaushalEra API Service Client
 * Provides structured API calls to the Express backend with graceful fallback.
 */

const API_BASE_URL = '/api';

/**
 * Generic request helper with JSON parsing and error handling
 */
async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers
    }
  };

  if (config.body && typeof config.body === 'object') {
    config.body = JSON.stringify(config.body);
  }

  try {
    const res = await fetch(url, config);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || `API Error (${res.status})`);
    }
    return { data, error: null };
  } catch (err) {
    console.warn(`[API Client] Error on ${endpoint}:`, err.message);
    return { data: null, error: err.message };
  }
}

// ==================== AUTH API ====================
export const authApi = {
  login: async (email, password, role) => {
    return await request('/auth/login', {
      method: 'POST',
      body: { email, password, role }
    });
  },

  demoLogin: async (role) => {
    return await request('/auth/demo-login', {
      method: 'POST',
      body: { role }
    });
  },

  signup: async (userData) => {
    return await request('/auth/signup', {
      method: 'POST',
      body: userData
    });
  },

  onboarding: async (profileData) => {
    return await request('/auth/onboarding', {
      method: 'POST',
      body: profileData
    });
  },

  getProfile: async () => {
    return await request('/auth/me');
  }
};

// ==================== JOBS & INTERNSHIPS API ====================
export const jobsApi = {
  getAllJobs: async (query = {}) => {
    const params = new URLSearchParams(query).toString();
    return await request(`/jobs?${params}`);
  },

  getJobById: async (id) => {
    return await request(`/jobs/${id}`);
  },

  createJob: async (jobData) => {
    return await request('/jobs', {
      method: 'POST',
      body: jobData
    });
  },

  getAllInternships: async (query = {}) => {
    const params = new URLSearchParams(query).toString();
    return await request(`/jobs/internships?${params}`);
  },

  createInternship: async (internData) => {
    return await request('/jobs/internships', {
      method: 'POST',
      body: internData
    });
  }
};

// ==================== APPLICATIONS API ====================
export const applicationsApi = {
  getAll: async () => {
    return await request('/applications');
  },

  apply: async (applicationData) => {
    return await request('/applications', {
      method: 'POST',
      body: applicationData
    });
  },

  updateStage: async (id, stage) => {
    return await request(`/applications/${id}/stage`, {
      method: 'PATCH',
      body: { stage }
    });
  }
};

// ==================== CANDIDATES API ====================
export const candidatesApi = {
  getAll: async () => {
    return await request('/candidates');
  },

  updateStatus: async (id, status) => {
    return await request(`/candidates/${id}/status`, {
      method: 'PATCH',
      body: { status }
    });
  }
};

// ==================== DOMAINS & SKILLS API ====================
export const domainsApi = {
  getAll: async () => {
    return await request('/domains');
  },

  getById: async (id) => {
    return await request(`/domains/${id}`);
  },

  create: async (domainData) => {
    return await request('/domains', {
      method: 'POST',
      body: domainData
    });
  }
};

export const skillsApi = {
  getAll: async () => {
    return await request('/skills');
  },

  create: async (skillData) => {
    return await request('/skills', {
      method: 'POST',
      body: skillData
    });
  }
};

// ==================== RESOURCES API ====================
export const resourcesApi = {
  getAll: async () => {
    return await request('/resources');
  },

  create: async (resourceData) => {
    return await request('/resources', {
      method: 'POST',
      body: resourceData
    });
  }
};

// ==================== ASSESSMENTS API ====================
export const assessmentsApi = {
  getAll: async () => {
    return await request('/assessments');
  },

  getById: async (id) => {
    return await request(`/assessments/${id}`);
  },

  submit: async (id, answers) => {
    return await request(`/assessments/${id}/submit`, {
      method: 'POST',
      body: { answers }
    });
  }
};

// ==================== HEALTH API ====================
export const healthApi = {
  check: async () => {
    return await request('/health');
  }
};
